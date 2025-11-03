import { NextRequest, NextResponse } from 'next/server';
import { getPool } from '@/lib/db';

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
    const newLead = {
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

