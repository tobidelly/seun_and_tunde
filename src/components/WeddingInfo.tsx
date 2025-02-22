import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';

const WeddingInfo = () => {
  return (
    <section className="py-20 bg-rose-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-dancing text-rose-600 mb-4">
            The Celebration
          </h2>
          <p className="text-gray-600">Join us for this special moment</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <Calendar className="mx-auto mb-4 text-rose-600" size={32} />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Date</h3>
            <p className="text-gray-600">May 18, 2025</p>
          </div>

          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <Clock className="mx-auto mb-4 text-rose-600" size={32} />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Time</h3>
            <p className="text-gray-600">10:00 AM MST Prompt</p>
          </div>

          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <MapPin className="mx-auto mb-4 text-rose-600" size={32} />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Venue</h3>
            <p className="text-gray-600">Arrowhead Golf Course</p>
            <p className="text-gray-600">10850 Sundown Trail, Littleton, CO 80125</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeddingInfo;