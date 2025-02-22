import React from "react";
import { motion } from "framer-motion";
import { CloudSnow, Sun, CloudRain, Plane } from "lucide-react";

const TravelPack: React.FC<{ id: string }> = ({ id }) => {
  return (
    <section id={id} className="py-20 bg-rose-50">
      <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-dancing text-rose-600 mb-6">
          Travel & Packing Guide
        </h2>
        
        <motion.div
          className="mb-8 text-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg mb-4">
            Colorado’s weather can be unpredictable—expect <strong>rain</strong>,
            <strong> snow</strong>, and <strong>sunshine</strong> all in one day!
          </p>
          <div className="flex justify-center gap-4 text-rose-600">
            <CloudRain size={32} />
            <CloudSnow size={32} />
            <Sun size={32} />
          </div>
        </motion.div>

        <motion.div
          className="bg-white p-6 rounded-lg shadow-lg text-left"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Packing Essentials
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>A warm <strong>sweater</strong> for chilly mornings and evenings</li>
            <li>Wool <strong>gloves, scarves, and socks</strong> for extra warmth</li>
            <li>Comfortable walking shoes for exploring</li>
            <li>A waterproof jacket in case of unexpected rain</li>
            <li>Sunglasses & sunscreen for the bright sun</li>
          </ul>
        </motion.div>

        <motion.div
          className="mt-10 bg-green-700 text-white py-6 px-8 rounded-lg shadow-lg flex items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Plane size={32} />
          <div>
            <h3 className="text-xl font-semibold">Entry Point</h3>
            <p className="text-lg">Denver International Airport (DEN)</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TravelPack;
