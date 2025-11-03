'use client';

import { useState, FormEvent } from 'react';
import { Send } from 'lucide-react';
import { trackContactSubmission } from '@/lib/analytics';

export default function QuickContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Track the contact form submission
    trackContactSubmission('quick_contact');

    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        (e.target as HTMLFormElement).reset();
      }, 3000);
    }, 1000);
  };

  return (
    <div className="mt-12 bg-gray-50 rounded-xl p-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Contact</h3>
      
      {isSubmitted ? (
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
          <div className="text-green-600 text-lg font-semibold mb-2">
            ✓ Message Sent Successfully!
          </div>
          <p className="text-gray-600">
            We'll get back to you within 24 hours.
          </p>
        </div>
      ) : (
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="form-label">Name</label>
              <input 
                type="text" 
                className="form-input" 
                placeholder="Your name" 
                required 
              />
            </div>
            <div>
              <label className="form-label">Phone</label>
              <input 
                type="tel" 
                className="form-input" 
                placeholder="Your phone" 
                required 
              />
            </div>
          </div>
          <div>
            <label className="form-label">Email</label>
            <input 
              type="email" 
              className="form-input" 
              placeholder="Your email" 
              required 
            />
          </div>
          <div>
            <label className="form-label">Message</label>
            <textarea 
              className="form-input h-24 resize-none" 
              placeholder="Tell us about your moving needs..."
              required
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="btn-primary w-full flex items-center justify-center space-x-2"
            disabled={isSubmitting}
          >
            <Send className="h-5 w-5" />
            <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
          </button>
        </form>
      )}
    </div>
  );
}

