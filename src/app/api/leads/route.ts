import { NextRequest, NextResponse } from 'next/server';
import { getPool } from '@/lib/db';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// GET - Retrieve all leads
export async function GET(request: NextRequest) {
  try {
    const pool = getPool();
    const result = await pool.query(
      'SELECT * FROM leads ORDER BY submitted_at DESC'
    );

    // Convert snake_case to camelCase for frontend
    const leads = result.rows.map(row => ({
      id: row.id,
      name: row.name,
      email: row.email,
      phone: row.phone,
      moveType: row.move_type,
      moveDate: row.move_date,
      message: row.message,
      status: row.status,
      submittedAt: row.submitted_at,
      updatedAt: row.updated_at,
      estimatedValue: row.estimated_value,
    }));

    return NextResponse.json({ success: true, leads });
  } catch (error) {
    console.error('Error retrieving leads:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to retrieve leads' },
      { status: 500 }
    );
  }
}

// POST - Create a new lead
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    let newLead = null;

    // Try to save to database, but don't fail if database is not available
    try {
      const pool = getPool();
      const result = await pool.query(
        `INSERT INTO leads (name, email, phone, move_type, move_date, message, estimated_value)
         VALUES ($1, $2, $3, $4, $5, $6, $7)
         RETURNING *`,
        [
          body.name,
          body.email,
          body.phone,
          body.moveType || 'Contact',
          body.moveDate || null,
          body.message,
          body.estimatedValue || 0,
        ]
      );

      const row = result.rows[0];
      newLead = {
        id: row.id,
        name: row.name,
        email: row.email,
        phone: row.phone,
        moveType: row.move_type,
        moveDate: row.move_date,
        message: row.message,
        status: row.status,
        submittedAt: row.submitted_at,
        estimatedValue: row.estimated_value,
      };
    } catch (dbError) {
      console.error('Database error (continuing without DB):', dbError);
      // Create a mock lead object for email
      newLead = {
        id: Date.now(),
        name: body.name,
        email: body.email,
        phone: body.phone,
        moveType: body.moveType || 'Contact',
        moveDate: body.moveDate,
        message: body.message,
        status: 'new',
        submittedAt: new Date(),
        estimatedValue: body.estimatedValue || 0,
      };
    }

    // Send email notification via Resend
    try {
      const isQuoteRequest = body.moveType === 'Quote Request';

      await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'natiq.elect@gmail.com',
        subject: `${isQuoteRequest ? '🎯 NEW QUOTE REQUEST' : '📧 New Lead'}: ${body.name} - ${body.moveType || 'Contact'}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 700px; margin: 0 auto; background-color: #ffffff;">
            <div style="background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%); padding: 30px; text-align: center; border-radius: 8px 8px 0 0;">
              <h1 style="color: #ffffff; margin: 0; font-size: 28px;">
                ${isQuoteRequest ? '🎯 New Quote Request' : '📧 New Lead Submission'}
              </h1>
              <p style="color: #e0e7ff; margin: 10px 0 0 0; font-size: 14px;">
                Submitted at: ${new Date().toLocaleString('en-US', { timeZone: 'America/Toronto', dateStyle: 'full', timeStyle: 'short' })}
              </p>
            </div>

            <div style="padding: 30px; background-color: #f9fafb;">
              <div style="background-color: #ffffff; padding: 25px; border-radius: 8px; margin-bottom: 20px; border-left: 4px solid #2563eb;">
                <h2 style="margin-top: 0; color: #1f2937; font-size: 20px;">👤 Contact Information</h2>
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 8px 0; color: #6b7280; width: 120px;"><strong>Name:</strong></td>
                    <td style="padding: 8px 0; color: #1f2937;">${body.name}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #6b7280;"><strong>Email:</strong></td>
                    <td style="padding: 8px 0;"><a href="mailto:${body.email}" style="color: #2563eb; text-decoration: none;">${body.email}</a></td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #6b7280;"><strong>Phone:</strong></td>
                    <td style="padding: 8px 0;"><a href="tel:${body.phone}" style="color: #2563eb; text-decoration: none; font-weight: 600;">${body.phone}</a></td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #6b7280;"><strong>Type:</strong></td>
                    <td style="padding: 8px 0;"><span style="background-color: #dbeafe; color: #1e40af; padding: 4px 12px; border-radius: 12px; font-size: 13px; font-weight: 600;">${body.moveType || 'Contact'}</span></td>
                  </tr>
                  ${body.moveDate ? `
                  <tr>
                    <td style="padding: 8px 0; color: #6b7280;"><strong>Move Date:</strong></td>
                    <td style="padding: 8px 0; color: #1f2937; font-weight: 600;">${body.moveDate}</td>
                  </tr>
                  ` : ''}
                </table>
              </div>

              <div style="background-color: #ffffff; padding: 25px; border-radius: 8px; border-left: 4px solid #10b981;">
                <h2 style="margin-top: 0; color: #1f2937; font-size: 20px;">💬 ${isQuoteRequest ? 'Quote Details' : 'Message'}</h2>
                <div style="background-color: #f9fafb; padding: 15px; border-radius: 6px; line-height: 1.6;">
                  <pre style="white-space: pre-wrap; font-family: 'Courier New', monospace; font-size: 13px; color: #374151; margin: 0;">${body.message || 'No message provided'}</pre>
                </div>
              </div>

              <div style="background-color: #fef3c7; padding: 20px; border-radius: 8px; margin-top: 20px; border-left: 4px solid #f59e0b;">
                <h3 style="margin: 0 0 10px 0; color: #92400e; font-size: 16px;">⚡ Quick Actions</h3>
                <div style="display: flex; gap: 10px; flex-wrap: wrap;">
                  <a href="tel:${body.phone}" style="background-color: #2563eb; color: white; padding: 10px 20px; text-decoration: none; border-radius: 6px; display: inline-block; font-weight: 600; font-size: 14px;">📞 Call Now</a>
                  <a href="mailto:${body.email}" style="background-color: #10b981; color: white; padding: 10px 20px; text-decoration: none; border-radius: 6px; display: inline-block; font-weight: 600; font-size: 14px;">✉️ Reply via Email</a>
                </div>
              </div>
            </div>

            <div style="background-color: #1f2937; padding: 20px; text-align: center; border-radius: 0 0 8px 8px;">
              <p style="color: #9ca3af; margin: 0; font-size: 12px;">
                This lead was submitted from <strong style="color: #e5e7eb;">northmoving.ca</strong>
              </p>
              <p style="color: #6b7280; margin: 5px 0 0 0; font-size: 11px;">
                Respond within 2 hours for best conversion rates
              </p>
            </div>
          </div>
        `,
      });
    } catch (emailError) {
      console.error('Error sending email:', emailError);
      // Don't fail the request if email fails
    }

    return NextResponse.json({ success: true, lead: newLead }, { status: 201 });
  } catch (error) {
    console.error('Error creating lead:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create lead' },
      { status: 500 }
    );
  }
}

// PATCH - Update a lead's status
export async function PATCH(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, status } = body;
    const pool = getPool();

    const result = await pool.query(
      `UPDATE leads
       SET status = $1, updated_at = NOW()
       WHERE id = $2
       RETURNING *`,
      [status, id]
    );

    if (result.rows.length === 0) {
      return NextResponse.json(
        { success: false, error: 'Lead not found' },
        { status: 404 }
      );
    }

    const row = result.rows[0];
    const updatedLead = {
      id: row.id,
      name: row.name,
      email: row.email,
      phone: row.phone,
      moveType: row.move_type,
      moveDate: row.move_date,
      message: row.message,
      status: row.status,
      submittedAt: row.submitted_at,
      updatedAt: row.updated_at,
      estimatedValue: row.estimated_value,
    };

    return NextResponse.json({ success: true, lead: updatedLead });
  } catch (error) {
    console.error('Error updating lead:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to update lead' },
      { status: 500 }
    );
  }
}

