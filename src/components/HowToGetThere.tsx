import React from 'react';
import { Car, Plane, Train } from 'lucide-react';

interface HowToGetThereProps {
  id?: string;
}

const HowToGetThere: React.FC<HowToGetThereProps> = ({ id }) => {
  const venueLatitude = "40.712776"; // Replace with actual latitude
  const venueLongitude = "-74.005974"; // Replace with actual longitude
  const googleMapsEmbedUrl = `https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=${venueLatitude},${venueLongitude}`;

  return (
    <section id={id} className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-dancing text-rose-600 mb-4">
            How to Get There
          </h2>
          <p className="text-gray-600">Plan your journey to our celebration</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Travel Information */}
          <div className="space-y-6">
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <Car className="mx-auto mb-4 text-rose-600" size={32} />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">By Car</h3>
              <p className="text-gray-600">
                Ample parking available on site. Follow GPS to the venue address.
                Valet parking will be provided.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <Train className="mx-auto mb-4 text-rose-600" size={32} />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">By Train</h3>
              <p className="text-gray-600">
                Central Station is 10 minutes away. Take the Line 3 bus directly to
                the venue.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <Plane className="mx-auto mb-4 text-rose-600" size={32} />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">By Air</h3>
              <p className="text-gray-600">
                International Airport is 30 minutes away. Airport shuttles available
                to recommended hotels.
              </p>
            </div>
          </div>

          {/* Google Map */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              title="Venue Location"
              width="100%"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              src={googleMapsEmbedUrl}
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToGetThere;
