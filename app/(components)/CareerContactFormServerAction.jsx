'use client';
import { useRef, useState } from 'react';
import { submitCareerApplication } from '../actions/careerActions';
import SubmitButton from './SubmitButton';

export default function CareerContactFormServerAction() {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (formData) => {
    setIsSubmitting(true);
    setMessage('');

    try {
      const result = await submitCareerApplication(formData);
      
      if (result.success) {
        setMessage(result.message);
        formRef.current?.reset();
      } else {
        setMessage(result.message);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setMessage('There was an error submitting your application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-[605px] h-[550px] mx-auto">
      <form 
        ref={formRef}
        action={handleSubmit}
        className="w-full h-full bg-white border border-gray-300 rounded-lg shadow-md p-6 space-y-6"
      >
        <div className="space-y-6">
          {/* Name Field */}
          <div className="space-y-2">
            <label htmlFor="name" className="block text-gray-800 font-medium text-sm">
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder="Enter your name"
            />
          </div>

          {/* Surname Field */}
          <div className="space-y-2">
            <label htmlFor="surname" className="block text-gray-800 font-medium text-sm">
              Surname *
            </label>
            <input
              type="text"
              id="surname"
              name="surname"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder="Enter your surname"
            />
          </div>

          {/* Email Field */}
          <div className="space-y-2">
            <label htmlFor="email" className="block text-gray-800 font-medium text-sm">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder="Enter your email"
            />
          </div>

          {/* Designation Field */}
          <div className="space-y-2">
            <label htmlFor="designation" className="block text-gray-800 font-medium text-sm">
              Designation *
            </label>
            <input
              type="text"
              id="designation"
              name="designation"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder="Enter your designation"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <SubmitButton 
            disabled={isSubmitting}
            customPaddingClass="w-full py-3 px-6"
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </SubmitButton>
        </div>

        {/* Message Display */}
        {message && (
          <div className={`text-center p-3 rounded-lg ${
            message.includes('error') 
              ? 'bg-red-100 text-red-700' 
              : 'bg-green-100 text-green-700'
          }`}>
            {message}
          </div>
        )}
      </form>
    </div>
  );
} 