'use client';
import { useRef, useState, useEffect } from 'react';
import { submitCareerApplication } from '../actions/careerActions';

export default function CareerContactFormServerAction() {
  const formRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleSubmit = async (formData) => {
    setIsSubmitting(true);
    setMessage('');

    try {
      const result = await submitCareerApplication(formData);
      
      if (result.success) {
        setMessage(result.message);
        if (formRef.current) {
          formRef.current.reset();
        }
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

  if (!isMounted) {
    return (
      <div className="w-[90vw] max-w-[605px] h-auto min-h-[456px] bg-white rounded-[10px] p-6 flex flex-col gap-6 md:w-[605px] md:h-auto justify-center mx-auto border border-gray-300 shadow-lg">
        <div className="flex items-center justify-center h-full">
          <div className="animate-pulse">Loading form...</div>
        </div>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      action={handleSubmit}
      className="w-[90vw] max-w-[605px] h-auto min-h-[456px] bg-white rounded-[10px] p-6 flex flex-col gap-6 md:w-[605px] md:h-auto justify-center mx-auto border border-gray-300 shadow-lg"
    >
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-gray-800">Name<span className="text-red-500">*</span></label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="John"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="surname" className="text-gray-800">Surname<span className="text-red-500">*</span></label>
          <input
            type="text"
            id="surname"
            name="surname"
            required
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Doe"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-gray-800">Email<span className="text-red-500">*</span></label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="john.doe@example.com"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="designation" className="text-gray-800">Designation<span className="text-red-500">*</span></label>
          <input
            type="text"
            id="designation"
            name="designation"
            required
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="AI Engineer"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="resume" className="text-gray-800">Resume</label>
          <input
            type="file"
            id="resume"
            name="resume"
            accept=".pdf,.doc,.docx,.txt"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg border border-blue-700 transition self-center"
      >
        {isSubmitting ? 'Applying...' : 'Apply'}
      </button>
      {message && (
        <div className={`mt-4 text-center ${message.includes('error') ? 'text-red-600' : 'text-green-600'}`}>{message}</div>
      )}
    </form>
  );
} 