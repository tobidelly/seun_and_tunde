import React from 'react';
import { Gift, CreditCard } from 'lucide-react';
import { motion } from 'framer-motion';

interface GiftRegistryProps {
  id?: string;
}

const GiftRegistry: React.FC<GiftRegistryProps> = ({ id }) => {
  return (
    <section id={id} className="py-20 bg-rose-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-dancing text-rose-600 mb-4">Gift Us</h2>
          <p className="text-gray-600">Your presence is our present, but if you wish to give...</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="text-center p-8 bg-white rounded-lg shadow-sm">
            <Gift className="mx-auto mb-4 text-rose-600" size={32} />
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Gift Registry
            </h3>
            <p className="text-gray-600 mb-6">
              We've created a registry with some items we'd love to add to our home
            </p>
            <motion.a
              href="#"
              className="inline-block bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-rose-700 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Registry
            </motion.a>
          </div>

          <div className="text-center p-8 bg-white rounded-lg shadow-sm">
            <CreditCard className="mx-auto mb-4 text-rose-600" size={32} />
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Monetary Gift
            </h3>
            <p className="text-gray-600 mb-6">
              If you prefer to give a monetary gift, we have a digital wishing well
            </p>
            <motion.a
              href="#"
              className="inline-block bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-rose-700 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Digital Wishing Well
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GiftRegistry;
