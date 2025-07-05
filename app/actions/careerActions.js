'use server';

import { sendCareerEmail } from '@/app/lib/emailService';

export async function submitCareerApplication(formData) {
  try {
    // Extract form data
    const name = formData.get('name');
    const surname = formData.get('surname');
    const email = formData.get('email');
    const designation = formData.get('designation');

    // Validate required fields
    if (!name || !surname || !email || !designation) {
      return {
        success: false,
        message: 'All fields are required'
      };
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return {
        success: false,
        message: 'Please enter a valid email address'
      };
    }

    // Send email notification
    const emailResult = await sendCareerEmail(formData);
    
    if (!emailResult.success) {
      console.error('Failed to send career email:', emailResult.message);
      return {
        success: false,
        message: 'Failed to send application notification. Please try again later.'
      };
    }

    // Log the application
    console.log('Career application received and email sent:', {
      name,
      surname,
      email,
      designation,
      timestamp: new Date().toISOString()
    });

    return {
      success: true,
      message: 'Application submitted successfully! We will get back to you soon.'
    };

  } catch (error) {
    console.error('Career form submission error:', error);
    return {
      success: false,
      message: 'Internal server error. Please try again later.'
    };
  }
} 