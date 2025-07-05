import { NextResponse } from 'next/server';
import { sendContactEmail, sendTestEmail } from '@/app/lib/emailService';

// Handle POST requests (form submissions)
export async function POST(request) {
    try {
        const formData = await request.formData();
        console.log('Received form data:', Object.fromEntries(formData));

        const result = await sendContactEmail(formData);
        
        if (result.success) {
            return NextResponse.json({ 
                success: true, 
                message: 'Email sent successfully' 
            });
        } else {
            return NextResponse.json({ 
                success: false, 
                message: result.message 
            }, { status: 500 });
        }
    } catch (error) {
        console.error('API route error:', error);
        return NextResponse.json({ 
            success: false, 
            message: 'Internal server error' 
        }, { status: 500 });
    }
}

// Handle GET requests (testing)
export async function GET() {
    try {
        const result = await sendTestEmail();
        
        if (result.success) {
            return NextResponse.json({ 
                success: true, 
                message: 'Test email sent successfully' 
            });
        } else {
            return NextResponse.json({ 
                success: false, 
                message: result.message 
            }, { status: 500 });
        }
    } catch (error) {
        console.error('Test email error:', error);
        return NextResponse.json({ 
            success: false, 
            message: 'Failed to send test email' 
        }, { status: 500 });
    }
}