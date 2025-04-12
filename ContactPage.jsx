/* eslint-disable no-unused-vars */
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactUs = () => {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_e2lpfjo', 'template_7vkxcfg', form.current, {
        publicKey: 'TENAQkYoTTnFtdpZJ',
      })
      .then(
        () => {
          setStatus('success');
          form.current.reset();
          setTimeout(() => setStatus(''), 3000);
        },
        (error) => {
          console.error('FAILED...', error.text);
          setStatus('error');
          setTimeout(() => setStatus(''), 3000);
        }
      );
  };

  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-lg bg-blue-100 border border-blue-200 p-8 rounded-xl shadow-md">
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
          Contact Us
        </h2>

        {status === 'success' && (
          <div className="mb-4 p-3 text-green-700 bg-green-100 rounded">
            ✅ Message sent successfully.
          </div>
        )}
        {status === 'error' && (
          <div className="mb-4 p-3 text-red-700 bg-red-100 rounded">
            ❌ Failed to send message. Please try again.
          </div>
        )}

        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="from_name"
              required
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="from_email"
              required
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              name="message"
              rows="4"
              required
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;



 