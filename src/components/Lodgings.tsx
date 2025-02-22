import React from 'react';

interface LodgingsProps {
  id?: string;
}

const lodgings = [
  {
    name: 'Courtyard by Marriott, Littleton CO',
    image: 'https://source.unsplash.com/400x300/?hotel',
  },
  {
    name: 'Residence Inn by Marriott, Littleton CO',
    image: 'https://source.unsplash.com/400x300/?luxury-hotel',
  },
  {
    name: 'Staybridge Suites, Highlands Ranch, CO',
    image: 'https://source.unsplash.com/400x300/?suite',
  },
];

const restaurants = [
  {
    name: 'Panera',
    image: 'https://source.unsplash.com/400x300/?restaurant',
  },
  {
    name: 'Snooze',
    image: 'https://source.unsplash.com/400x300/?breakfast',
  },
  {
    name: 'STK in Downtown Denver',
    image: 'https://source.unsplash.com/400x300/?fine-dining',
  },
];

const Lodgings: React.FC<LodgingsProps> = ({ id }) => {
  return (
    <section id={id} className="py-20 bg-rose-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-dancing text-rose-600 mb-4">Lodgings</h2>
          <p className="text-gray-600">Here are our recommended hotels for your stay.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {lodgings.map((hotel, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={hotel.image} alt={hotel.name} className="w-full h-48 object-cover" />
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-900">{hotel.name}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 mb-12">
          <h2 className="text-4xl font-dancing text-rose-600 mb-4">Our Favorite Restaurants</h2>
          <p className="text-gray-600">Check out these amazing spots for a great meal!</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {restaurants.map((restaurant, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={restaurant.image} alt={restaurant.name} className="w-full h-48 object-cover" />
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-900">{restaurant.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Lodgings;
