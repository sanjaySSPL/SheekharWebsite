import { Resend } from 'resend';

// Debug: Check if API key is loaded
console.log('=== ENVIRONMENT VARIABLE DEBUG ===');
console.log('process.env.RESEND_API_KEY:', process.env.RESEND_API_KEY);
console.log('API Key loaded:', process.env.RESEND_API_KEY ? 'Yes' : 'No');
console.log('API Key length:', process.env.RESEND_API_KEY?.length || 0);
console.log('All env vars:', Object.keys(process.env).filter(key => key.includes('RESEND')));
console.log('==================================');

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail({ name, surname, email, company, category, contactNumber, countryCode, query }) {
  try {
    // Create email content
    const emailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
          New Contact Form Submission
        </h2>
        
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #007bff; margin-top: 0;">Contact Information</h3>
          <p><strong>Name:</strong> ${name} ${surname || ''}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Company:</strong> ${company}</p>
          ${category ? `<p><strong>Category:</strong> ${category}</p>` : ''}
          ${countryCode || contactNumber ? `<p><strong>Contact Number:</strong> ${countryCode ? countryCode + ' ' : ''}${contactNumber || ''}</p>` : ''}
          ${query ? `<p><strong>Query:</strong> ${query}</p>` : ''}
        </div>
        
        <div style="background-color: #e9ecef; padding: 15px; border-radius: 5px; font-size: 12px; color: #6c757d;">
          <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
          <p><strong>Source:</strong> Neyohm Website Contact Form</p>
        </div>
      </div>
    `;

    // Send email
    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'it1@sheekharr.com',
      subject: `New Contact Form Submission - ${company}`,
      html: emailContent,
    });

    console.log('Email sent successfully:', data);
    return { success: true, data };

  } catch (error) {
    console.error('Error sending contact email:', error);
    return { 
      success: false, 
      message: error.message || 'Failed to send email' 
    };
  }
}

export async function sendCareerEmail(formData, resume) {
  try {
    // Extract form data
    const name = formData.get('name') || formData.name;
    const surname = formData.get('surname') || formData.surname;
    const email = formData.get('email') || formData.email;
    const designation = formData.get('designation') || formData.designation;

    // Prepare attachments array if resume is present
    let attachments = [];
    if (resume && typeof resume === 'object' && resume.name && resume.arrayBuffer) {
      const buffer = Buffer.from(await resume.arrayBuffer());
      attachments.push({
        filename: resume.name,
        content: buffer,
      });
    }

    // Create email content
    const emailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
          New Career Application Submission
        </h2>
        
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #007bff; margin-top: 0;">Applicant Information</h3>
          <p><strong>Name:</strong> ${name} ${surname || ''}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Designation:</strong> ${designation}</p>
        </div>
        
        <div style="background-color: #e9ecef; padding: 15px; border-radius: 5px; font-size: 12px; color: #6c757d;">
          <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
          <p><strong>Source:</strong> Neyohm Website Career Form</p>
        </div>
      </div>
    `;

    // Send email
    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'it1@sheekharr.com',
      subject: `New Career Application - ${name} ${surname}`,
      html: emailContent,
      ...(attachments.length > 0 ? { attachments } : {}),
    });

    console.log('Career email sent successfully:', data);
    return { success: true, data };

  } catch (error) {
    console.error('Error sending career email:', error);
    return { 
      success: false, 
      message: error.message || 'Failed to send email' 
    };
  }
}

// For testing purposes
export async function sendTestEmail() {
  try {
    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'it1@sheekharr.com',
      subject: 'Test Email from Neyohm Contact Form',
      html: '<p>This is a test email to verify the email service is working correctly.</p>',
    });

    return { success: true, data };
  } catch (error) {
    console.error('Error sending test email:', error);
    return { 
      success: false, 
      message: error.message || 'Failed to send test email' 
    };
  }
} 