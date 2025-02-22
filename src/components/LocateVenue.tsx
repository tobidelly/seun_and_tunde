import React from 'react';
import { MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import Arrowhead from './Asset/Arrowhead.jpg';

interface LocateVenueProps {
  id?: string;
}

const LocateVenue: React.FC<LocateVenueProps> = ({ id }) => {
  const venueAddress = "10850 Sundown Trail, Littleton, CO 80125";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(venueAddress)}`;

  return (
    <section id={id} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-dancing text-rose-600 mb-4">
            Ceremony & Reception Venue
          </h2>
          <div className="flex items-center justify-center gap-2 text-rose-600">
            <MapPin size={20} />
            <p>Arrowhead Golf Course</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src={Arrowhead}
              alt="Venue"
              className="rounded-lg shadow-lg w-full h-96 object-cover"
            />
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                The Perfect Setting
              </h3>
              <p className="text-gray-600">
                The Arrowhead Golf Course offers a stunning backdrop for our vow renewal
                ceremony. With its elegant design, lofty mountain view and beautiful gardens, it's
                the perfect place to celebrate our love.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                Address
              </h3>
              <p className="text-gray-600">
                {venueAddress}
              </p>
            </div>
            <motion.a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-rose-700 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Directions
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocateVenue;
