import React, { useState, ChangeEvent, FormEvent } from 'react';
import emailjs from '@emailjs/browser';

const RSVPForm: React.FC = () => {
  // Define the form data state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    attending: 'yes',
    guests: '1',
    dietary: '',
    message: '',
  });

  // State to manage submission status
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Handle input changes
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Initialize EmailJS with your public key
    emailjs.init('01V3QiRkKwOWKATYz');

    emailjs.send('service_4h2eav9', 'template_4cwdm4l', formData)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setSubmissionStatus('success');
        // Reset form fields
        setFormData({
          name: '',
          email: '',
          attending: 'yes',
          guests: '1',
          dietary: '',
          message: '',
        });
      })
      .catch((err) => {
        console.error('FAILED...', err);
        setSubmissionStatus('error');
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Field */}
        <div>
          <label className="block text-lg font-semibold text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-md shadow-sm border-gray-300 focus:ring-rose-500 focus:border-rose-500 bg-gray-50"
            required
          />
        </div>

        {/* Email Field */}
        <div>
          <label className="block text-lg font-semibold text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-md shadow-sm border-gray-300 focus:ring-rose-500 focus:border-rose-500 bg-gray-50"
            required
          />
        </div>

        {/* Attending Field */}
        <div>
          <label className="block text-lg font-semibold text-gray-700">Will you be attending?</label>
          <select
            name="attending"
            value={formData.attending}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-md shadow-sm border-gray-300 focus:ring-rose-500 focus:border-rose-500 bg-gray-50"
            required
          >
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>

        {/* Number of Guests Field */}
        <div>
          <label className="block text-lg font-semibold text-gray-700">Number of Guests</label>
          <input
            type="number"
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-md shadow-sm border-gray-300 focus:ring-rose-500 focus:border-rose-500 bg-gray-50"
            min="1"
            required
          />
        </div>

        {/* Dietary Restrictions Field */}
        <div>
          <label className="block text-lg font-semibold text-gray-700">Dietary Restrictions</label>
          <textarea
            name="dietary"
            value={formData.dietary}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-md shadow-sm border-gray-300 focus:ring-rose-500 focus:border-rose-500 bg-gray-50"
            rows={3}
          />
        </div>

        {/* Message Field */}
        <div>
          <label className="block text-lg font-semibold text-gray-700">Message for the Couple</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-md shadow-sm border-gray-300 focus:ring-rose-500 focus:border-rose-500 bg-gray-50"
            rows={5}
          />
        </div>

        {/* Submit Button */}
        <div className="text-center mt-8">
          <button
            type="submit"
            className="bg-green-700 text-white font-semibold px-8 py-3 rounded-full shadow-md hover:bg-rose-700 transition duration-300"
          >
            Submit RSVP
          </button>
        </div>
      </form>

      {/* Submission Feedback */}
      {submissionStatus === 'success' && (
        <p className="mt-4 text-center text-green-600">Thank you! Your RSVP has been submitted successfully.</p>
      )}
      {submissionStatus === 'error' && (
        <p className="mt-4 text-center text-red-600">Oops! Something went wrong. Please try again later.</p>
      )}
    </div>
  );
};

export default RSVPForm;