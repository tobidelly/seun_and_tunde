import React from "react";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-green-700 text-white py-12 rounded-2xl shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          
          {/* Navigation Links */}
          <nav className="mb-6">
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-sm font-light">
              <li>
                <a href="#how-to-get-there" className="hover:text-rose-300 transition">
                  How to Get There
                </a>
              </li>
              <li>
                <a href="#program-calendar" className="hover:text-rose-300 transition">
                  Program Calendar
                </a>
              </li>
              <li>
                <a href="#travel-guide" className="hover:text-rose-300 transition">
                  Travel Guide
                </a>
              </li>
              <li>
                <a href="#gift-us" className="hover:text-rose-300 transition">
                  Gift Us
                </a>
              </li>
              <li>
                <a href="#lodgings" className="hover:text-rose-300 transition">
                  Lodgings
                </a>
              </li>
              <li>
                <a href="#dress-code" className="hover:text-rose-300 transition">
                  Dress Code
                </a>
              </li>
              <li>
                <a href="#rsvp" className="hover:text-rose-300 transition">
                  RSVP
                </a>
              </li>
              <li>
                <a href="#our-story" className="hover:text-rose-300 transition">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-rose-300 transition">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#locate-venue" className="hover:text-rose-300 transition">
                  Locate Venue
                </a>
              </li>
              <li>
                <a href="#contact-us" className="hover:text-rose-300 transition">
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>

          {/* Decorative Heart Divider */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-white/30" />
            <Heart className="text-rose-400" size={24} />
            <div className="h-px w-12 bg-white/30" />
          </div>
          
          {/* Wedding Names */}
          <h2 className="text-3xl font-dancing mb-4">Seun & Tunde</h2>
          <p className="text-gray-200 mb-6">
            Thank you for being part of our special day
          </p>

          {/* Copyright Notice */}
          <p className="text-sm text-gray-300">
            © 2025 Seun & Tunde's Vow Renewal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
