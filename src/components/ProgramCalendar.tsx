import React from "react";
import { motion } from "framer-motion";

const schedule = [
  {
    day: "Saturday, May 17th",
    title: "Welcoming Our Guests",
    time: "All Day Long",
    description: "Welcoming our guests in-person and over the phone.",
    bgColor: "bg-rose-100",
  },
  {
    day: "Sunday, May 18th",
    title: "Vow Renewal & Anniversary Thanksgiving",
    time: "10:00 AM MST Prompt",
    description: "Menu menu and gifting follows immediately!",
    bgColor: "bg-emerald-100",
  },
  {
    day: "Sunday, May 18th",
    title: "Road Trip: Mountain State View",
    time: "2:00 PM - 6:00 PM MST",
    description:
      "For friends who flew over from other states and other countries. We would love to show you the beauty of Colorado!",
    bgColor: "bg-beige-200",
  },
  {
    day: "Monday, May 19th",
    title: "Appreciation Calls & Farewells",
    time: "All Day Long",
    description: "Saying our goodbyes and sending appreciation messages.",
    bgColor: "bg-green-100",
  },
];

const ProgramCalendar: React.FC<{ id: string }> = ({ id }) => {
  return (
    <section id={id} className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-dancing text-rose-600 text-center mb-12">
          Program Calendar
        </h2>

        <div className="relative border-l-4 border-gray-300">
          {schedule.map((event, index) => (
            <motion.div
              key={index}
              className="mb-10 ml-6 relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.3 }}
              viewport={{ once: true }}
            >
              {/* Event Details */}
              <motion.div
                className={`p-6 rounded-lg shadow-lg ${event.bgColor}`}
                whileHover={{ scale: 1.05 }}
                animate={{
                  rotate: [0, -1, 1, 0], // subtle dance effect
                  transition: { duration: 2, repeat: Infinity },
                }}
              >
                <h3 className="text-lg text-gray-900">{event.day}</h3>
                <p className="text-xl font-dancing font-bold text-rose-800 mt-2">
                  {event.title}
                </p>
                <p className="text-gray-700 mt-1">{event.time}</p>
                {event.description && (
                  <p className="text-gray-600 mt-2 italic">{event.description}</p>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramCalendar;
