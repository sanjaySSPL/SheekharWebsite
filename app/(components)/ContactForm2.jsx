'use client'
import React, { useState } from 'react';
import { submitContactForm } from '../actions/contactActions';
import { useRef } from 'react';

function ContactForm2() {
  const [result, setResult] = useState(null);
  const formRef = useRef(null);

  async function action(formData) {
    const res = await submitContactForm(formData);
    console.log(res)
    setResult(res);
    formRef.current.reset();
  }

  return (
    <form
      ref={formRef}
      action={action}
      method="POST"
      className="w-[90vw] max-w-[605px] h-auto min-h-[456px] bg-white rounded-[10px] p-6 flex flex-col gap-6 md:w-[605px] md:h-[746px] justify-center mx-auto border border-gray-300 shadow-lg"
    >
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-gray-800">Name<span className="text-red-500">*</span></label>
          <input
            id="name"
            name="name"
            required
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Value"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="surname" className="text-gray-800">Surname</label>
          <input
            id="surname"
            name="surname"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Value"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="company" className="text-gray-800">Company Name<span className="text-red-500">*</span></label>
          <input
            id="company"
            name="company"
            required
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Value"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-gray-800">Email<span className="text-red-500">*</span></label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Value"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="contactNumber" className="text-gray-800">Contact Number</label>
          <input
            id="contactNumber"
            name="contactNumber"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Value"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="query" className="text-gray-800">Query</label>
          <textarea
            id="query"
            name="query"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Frontend developer"
          />
        </div>
      </div>
      <button
        type="submit"
        className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg border border-blue-700 transition self-center"
      >
        Submit
      </button>
      {result && (
        <div className={`mt-4 text-center ${result.success ? 'text-green-600' : 'text-red-600'}`}>{result.message}</div>
      )}
    </form>
  );
}

export default ContactForm2; 