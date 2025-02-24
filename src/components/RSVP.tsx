import React from 'react';
import RSVPForm from './RSVPForm';

interface RSVPProps {
  id: string;
}

const RSVP: React.FC<RSVPProps> = ({ id }) => {
  return (
    <section id={id} className="py-20 bg-gradient-to-b from-gray-50 to-rose-100 relative">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 bg-white shadow-lg rounded-xl p-10 border border-gray-200 relative">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-dancing text-rose-600 mb-4">You're Invited!</h2>
          <p className="text-gray-700">Kindly RSVP by May 15, 2025</p>
        </div>
        <RSVPForm />
      </div>
    </section>
  );
};

export default RSVP;