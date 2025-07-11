'use server';

import { sendContactEmail } from '@/app/lib/emailService';

export async function submitContactForm(formData) {
  try {
    // Extract form data
    const name = formData.get('name');
    const surname = formData.get('surname'); // optional
    const email = formData.get('email');
    const company = formData.get('company');
    const query = formData.get('query'); // optional

    // Validate required fields
    if (!name || !email || !company) {
      return {
        success: false,
        message: 'Name, Email, and Company Name are required.'
      };
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return {
        success: false,
        message: 'Please enter a valid email address.'
      };
    }

    // Send email using the email service
    const emailResult = await sendContactEmail(formData);
    
    if (!emailResult.success) {
      return {
        success: false,
        message: 'Failed to send email. Please try again later.'
      };
    }

    // Log the contact for debugging
    console.log('Contact form received via Server Action:', {
      name,
      surname,
      email,
      company,
      query,
      timestamp: new Date().toISOString()
    });

    return {
      success: true,
      message: 'Thank you for contacting us! We will get back to you soon.'
    };

  } catch (error) {
    console.error('Contact form submission error:', error);
    return {
      success: false,
      message: 'Internal server error. Please try again later.'
    };
  }
} 