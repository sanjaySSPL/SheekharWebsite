"use client";
import { useState } from 'react';

export default function CareerContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    designation: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    try {
      const response = await fetch('/api/career', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage(result.message);
        setFormData({
          name: '',
          surname: '',
          email: '',
          designation: ''
        });
      } else {
        setMessage(result.error || 'There was an error submitting your application.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setMessage('There was an error submitting your application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-[605px] h-[456px] mx-auto">
      <form 
        onSubmit={handleSubmit}
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
              value={formData.name}
              onChange={handleInputChange}
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
              value={formData.surname}
              onChange={handleInputChange}
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
              value={formData.email}
              onChange={handleInputChange}
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
              value={formData.designation}
              onChange={handleInputChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder="Enter your designation"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Application'}
          </button>
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