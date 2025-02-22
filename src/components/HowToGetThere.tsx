import React, { useEffect } from 'react';
import { Car, Plane, Train } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import mapicon from './Asset/mapicon.png';

interface HowToGetThereProps {
  id?: string;
}

const HowToGetThere: React.FC<HowToGetThereProps> = ({ id }) => {
  // Arrowhead Golf Club coordinates
  const venuePosition: [number, number] = [39.452710, -105.078864];

  // Custom marker icon
  const customIcon = L.icon({
    iconUrl: mapicon, // Use iconUrl instead of src
    iconSize: [38, 38], // Adjust size as needed
  });

  useEffect(() => {
    // You can also handle cleanup logic here if needed
    return () => {
      // Optionally destroy the map instance here if it's unmounted
    };
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <section id={id} className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-dancing text-rose-600 mb-4">How to Get There</h2>
          <p className="text-gray-600">Plan your journey to our celebration</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Travel Information */}
          <div className="space-y-6">
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <Car className="mx-auto mb-4 text-rose-600" size={32} />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">By Car</h3>
              <p className="text-gray-600">
                Ample parking available on site. Follow GPS to the venue address. Valet parking will be provided.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <Train className="mx-auto mb-4 text-rose-600" size={32} />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">By Train</h3>
              <p className="text-gray-600">
                Central Station is 10 minutes away. Take the Line 3 bus directly to the venue.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <Plane className="mx-auto mb-4 text-rose-600" size={32} />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">By Air</h3>
              <p className="text-gray-600">
                International Airport is 30 minutes away. Airport shuttles available to recommended hotels.
              </p>
            </div>
          </div>

          {/* Leaflet Map */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            <MapContainer center={venuePosition} zoom={13} style={{ height: '450px', width: '100%' }}>
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={venuePosition} icon={customIcon}>
                <Popup>
                  Arrowhead Golf Club<br />10850 W Sundown Trail<br />Littleton, CO 80125
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToGetThere;
