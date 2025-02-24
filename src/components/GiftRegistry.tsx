import React, { useState } from 'react';
import { Gift, CreditCard, X, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import Zelle from './Asset/Zelle.jpeg';

interface GiftRegistryProps {
  id?: string;
}

const GiftRegistry: React.FC<GiftRegistryProps> = ({ id }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewRegistryClick = () => {
    const registryUrl = 'https://www.amazon.com/s?k=wedding+gifts&crid=34S87IN4GIACB&sprefix=%2Caps%2C404&ref=nb_sb_noss_2';
    window.open(registryUrl, '_blank');
  };

  const handleDigitalWishingWellClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const downloadImage = () => {
    const link = document.createElement('a');
    link.href = Zelle;
    link.download = 'DigitalWishingWellQRCode.jpeg';
    link.click();
  };

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
              We've created a registry with some items we'd love to add to our home.
            </p>
            <motion.button
              onClick={handleViewRegistryClick}
              className="inline-block bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-rose-700 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Registry
            </motion.button>
          </div>

          <div className="text-center p-8 bg-white rounded-lg shadow-sm">
            <CreditCard className="mx-auto mb-4 text-rose-600" size={32} />
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Monetary Gift
            </h3>
            <p className="text-gray-600 mb-6">
              If you prefer to give a monetary gift, we have a digital wishing well.
            </p>
            <motion.button
              onClick={handleDigitalWishingWellClick}
              className="inline-block bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-rose-700 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Digital Wishing Well
            </motion.button>
          </div>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-white p-4 rounded-lg shadow-lg relative max-w-xs w-full">
              <div className="flex justify-between items-center mb-4">
                <button
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X size={24} />
                </button>
                <button
                  onClick={downloadImage}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <Download size={24} />
                </button>
              </div>
              <img
                src={Zelle}
                alt="Digital Wishing Well QR Code"
                className="w-full h-auto rounded-md"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GiftRegistry;
