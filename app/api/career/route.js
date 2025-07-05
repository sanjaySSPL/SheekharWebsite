import { NextResponse } from 'next/server';
import { sendCareerEmail } from '@/app/lib/emailService';

// Handle POST requests (career form submissions)
export async function POST(request) {
    try {
        const formData = await request.formData();
        console.log('Received career form data:', Object.fromEntries(formData));

        const result = await sendCareerEmail(formData);
        
        if (result.success) {
            return NextResponse.json({ 
                success: true, 
                message: 'Career application submitted successfully' 
            });
        } else {
            return NextResponse.json({ 
                success: false, 
                message: result.message 
            }, { status: 500 });
        }
    } catch (error) {
        console.error('Career API route error:', error);
        return NextResponse.json({ 
            success: false, 
            message: 'Internal server error' 
        }, { status: 500 });
    }
}

// Handle GET requests (testing)
export async function GET() {
    try {
        // Create test form data for career email
        const testFormData = new FormData();
        testFormData.append('name', 'Test User');
        testFormData.append('surname', 'Test Surname');
        testFormData.append('email', 'test@example.com');
        testFormData.append('designation', 'Software Developer');

        const result = await sendCareerEmail(testFormData);
        
        if (result.success) {
            return NextResponse.json({ 
                success: true, 
                message: 'Test career email sent successfully' 
            });
        } else {
            return NextResponse.json({ 
                success: false, 
                message: result.message 
            }, { status: 500 });
        }
    } catch (error) {
        console.error('Test career email error:', error);
        return NextResponse.json({ 
            success: false, 
            message: 'Failed to send test career email' 
        }, { status: 500 });
    }
} 