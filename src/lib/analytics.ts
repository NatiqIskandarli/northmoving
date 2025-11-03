// Google Analytics 4 Event Tracking

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

// Track page views
export const pageview = (url: string) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }
};

// Track custom events
export const event = ({ action, category, label, value }: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Lead generation event (form submissions, quote requests)
export const trackLeadGeneration = (method: string, value?: number) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', 'generate_lead', {
      currency: 'CAD',
      value: value || 0,
      method: method, // e.g., 'quote_form', 'contact_form', 'quick_contact'
    });
  }
};

// Phone click event
export const trackPhoneClick = (phoneNumber: string, location: string) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', 'click_call', {
      event_category: 'engagement',
      event_label: phoneNumber,
      phone_location: location, // e.g., 'header', 'footer', 'contact_page'
    });
  }
};

// Email click event
export const trackEmailClick = (email: string, location: string) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', 'click_email', {
      event_category: 'engagement',
      event_label: email,
      email_location: location,
    });
  }
};

// WhatsApp click event (if implemented in the future)
export const trackWhatsAppClick = (location: string) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', 'click_whatsapp', {
      event_category: 'engagement',
      event_label: 'WhatsApp Contact',
      whatsapp_location: location,
    });
  }
};

// Quote form submission
export const trackQuoteSubmission = (moveType: string, estimatedValue?: number) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', 'quote_submission', {
      event_category: 'conversion',
      event_label: moveType,
      value: estimatedValue || 0,
      currency: 'CAD',
    });
    
    // Also track as lead generation
    trackLeadGeneration('quote_form', estimatedValue);
  }
};

// Contact form submission
export const trackContactSubmission = (formType: string) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', 'contact_submission', {
      event_category: 'conversion',
      event_label: formType,
    });
    
    // Also track as lead generation
    trackLeadGeneration('contact_form');
  }
};

// Service page view
export const trackServiceView = (serviceName: string) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', 'view_service', {
      event_category: 'engagement',
      event_label: serviceName,
    });
  }
};

// Pricing page view
export const trackPricingView = () => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', 'view_pricing', {
      event_category: 'engagement',
      event_label: 'Pricing Page',
    });
  }
};

// Google Business Profile click
export const trackGoogleBusinessClick = (action: string) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', 'google_business_click', {
      event_category: 'engagement',
      event_label: action, // 'review' or 'view_profile'
    });
  }
};

// Outbound link click
export const trackOutboundLink = (url: string, label: string) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', 'click', {
      event_category: 'outbound',
      event_label: label,
      transport_type: 'beacon',
      event_callback: function() {
        document.location.href = url;
      }
    });
  }
};

