import React from "react";
import { motion } from "framer-motion";

const colors = [
  { name: "Red", hex: "#D72638" },
  { name: "Emerald Green", hex: "#2E8B57" },
  { name: "Rustic Green", hex: "#556B2F" },
  { name: "White", hex: "#FFFFFF", border: "border-gray-300" },
];

interface DressCodeProps {
  id?: string; // Accept an optional id prop
}

const DressCode: React.FC<DressCodeProps> = ({ id }) => {
  return (
    <section id={id} className="py-20 bg-rose-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-dancing text-rose-600 mb-6">Dress Code</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="relative h-[700px] rounded-lg overflow-hidden shadow-lg">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: "url('https://img.fantaskycdn.com/8df2a003399371517a867e07481b20ab_1440x.jpg')",
              }}
            ></div>
            <div className="absolute inset-0 bg-emerald-700 bg-opacity-60 flex flex-col justify-center items-center text-white">
              <h3 className="text-4xl font-bold">Ladies</h3>
              <p className="text-lg">Emerald Green Dress (optional)</p>
            </div>
          </div>

          <div className="relative h-[700px] rounded-lg overflow-hidden shadow-lg">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: "url('https://i.pinimg.com/736x/ba/05/5a/ba055a46dbfcd4ee3d86e09b781d86e3.jpg')",
              }}
            ></div>
            <div className="absolute inset-0 bg-yellow-800 bg-opacity-60 flex flex-col justify-center items-center text-white">
              <h3 className="text-4xl font-bold">Men</h3>
              <p className="text-lg">Beige Suit with a Green Fedora (optional)</p>
            </div>
          </div>
        </div>

        <p className="text-center text-gray-700 text-lg font-semibold mb-12">
          Prepare to keep your gorgeous selves warm!
        </p>

        <div className="text-center mt-16 mb-12">
          <h3 className="text-3xl font-dancing text-rose-600 mb-6">Colors of the Day</h3>
          <div className="flex justify-center gap-6">
            {colors.map((color, index) => (
              <motion.div
                key={index}
                className={`w-24 h-24 rounded-full shadow-lg ${color.border || ""}`}
                style={{ backgroundColor: color.hex }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
            ))}
          </div>
        </div>

        <p className="text-center text-gray-700 mt-8 text-lg font-semibold">
          Any outfit that compliments any of these colors is appreciated.
        </p>
      </div>
    </section>
  );
};

export default DressCode;
