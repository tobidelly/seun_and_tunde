import React from 'react';
import { MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

interface LocateVenueProps {
  id?: string;
}

const LocateVenue: React.FC<LocateVenueProps> = ({ id }) => {
  const venueAddress = "123 Love Street, Romance City, RC 12345";
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
            <p>The Grand Plaza</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
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
                The Grand Plaza offers a stunning backdrop for our vow renewal
                ceremony. With its elegant architecture and beautiful gardens, it's
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
