import React, { useState } from "react";
import { motion } from "framer-motion";

const RSVP: React.FC<{ id: string }> = ({ id }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    attending: "yes",
    guests: "1",
    dietary: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id={id} className="py-20 bg-gradient-to-b from-gray-50 to-rose-100 relative">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 bg-white shadow-lg rounded-xl p-10 border border-gray-200 relative">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-dancing text-rose-600 mb-4">You're Invited!</h2>
          <p className="text-gray-700">Kindly RSVP by May 18, 2025</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {["name", "email", "dietary", "message"].map((field) => (
            <div key={field}>
              <label className="block text-lg font-semibold text-gray-700 capitalize">{field}</label>
              {field !== "message" ? (
                <input
                  type={field === "email" ? "email" : "text"}
                  name={field}
                  value={formData[field as keyof typeof formData]}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md shadow-sm border-gray-300 focus:ring-rose-500 focus:border-rose-500 bg-gray-50"
                  required
                />
              ) : (
                <textarea
                  name={field}
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-md shadow-sm border-gray-300 focus:ring-rose-500 focus:border-rose-500 bg-gray-50"
                  placeholder="Leave a message for the couple"
                ></textarea>
              )}
            </div>
          ))}

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-lg font-semibold text-gray-700">Will you be attending?</label>
              <select
                name="attending"
                value={formData.attending}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md shadow-sm border-gray-300 focus:ring-rose-500 focus:border-rose-500 bg-gray-50"
              >
                <option value="yes">Yes, I'll be there!</option>
                <option value="no">Unfortunately, I can't make it</option>
              </select>
            </div>
            <div>
              <label className="block text-lg font-semibold text-gray-700">Number of Guests</label>
              <select
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md shadow-sm border-gray-300 focus:ring-rose-500 focus:border-rose-500 bg-gray-50"
              >
                {[1, 2, 3, 4].map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="text-center mt-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="bg-green-700 text-white font-semibold px-8 py-3 rounded-full shadow-md hover:bg-rose-700 transition duration-300"
            >
              Submit RSVP
            </motion.button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default RSVP;
