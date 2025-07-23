"use client";
import React, { useState, useRef } from "react";
import { submitContactForm } from "../actions/contactActions";

export default function ContactForm() {
  const [result, setResult] = useState(null);
  const formRef = useRef(null);

  async function action(formData) {
    const res = await submitContactForm(formData);
    setResult(res);
    formRef.current.reset();
  }

  return (
    <form
      ref={formRef}
      action={action}
      method="POST"
      className="w-[95vw] max-w-4xl bg-white border border-gray-300 p-6 rounded-lg shadow-md flex flex-col gap-6 mx-auto"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-gray-800">Name<span className="text-red-500">*</span></label>
          <input
            id="name"
            name="name"
            required
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your name"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="surname" className="text-gray-800">Surname</label>
          <input
            id="surname"
            name="surname"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your surname (optional)"
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
            placeholder="Enter your email"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="contactNumber" className="text-gray-800">Contact Number</label>
          <input
            id="contactNumber"
            name="contactNumber"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your contact number (optional)"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="company" className="text-gray-800">Company Name<span className="text-red-500">*</span></label>
          <input
            id="company"
            name="company"
            required
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your company name"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="category" className="text-gray-800">Category</label>
          <input
            id="category"
            name="category"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter category (optional)"
          />
        </div>
        
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="query" className="text-gray-800">Query</label>
        <textarea
          id="query"
          name="query"
          className="p-3 border border-gray-300 rounded-lg h-24 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Your message (optional)"
        />
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
