import React from 'react';

interface LodgingsProps {
  id?: string;
}

const lodgings = [
  {
    name: 'Courtyard by Marriott, Littleton CO',
    image: 'https://cache.marriott.com/content/dam/marriott-renditions/DENLT/denlt-guestroom-0004-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1140px:*',
  },
  {
    name: 'Residence Inn by Marriott, Littleton CO',
    image: 'https://cache.marriott.com/content/dam/marriott-renditions/DENRT/denrt-suite-0008-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1140px:*',
  },
  {
    name: 'Staybridge Suites, Highlands Ranch, CO',
    image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/234525545.jpg?k=d54bb02e4c6aeb63f54c61bd0375f1b2d194f3a1c2670fb179c5460c813a0e4d&o=',
  },
];

const restaurants = [
  {
    name: 'Panera',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/4d/88/9a/exterior.jpg?w=1000&h=-1&s=1',
  },
  {
    name: 'Snooze',
    image: 'https://www.denverpost.com/wp-content/uploads/2023/11/TDP-Z-SNOOZE-01.jpg?w=862',
  },
  {
    name: 'STK in Downtown Denver',
    image: 'https://cdn.vox-cdn.com/thumbor/X4J3z_-myZsQCJmAmVwwBsnj0_0=/1200x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/7809629/STK_8312e.0.jpg',
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
