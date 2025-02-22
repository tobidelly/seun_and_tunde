import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type GalleryProps = {
  id?: string;
};

const Gallery: React.FC<GalleryProps> = ({ id }) => {
  const images = [
    {
      url: 'https://images.unsplash.com/photo-1529634806268-95f85e73e3c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      title: 'First Date',
      description: 'Where it all began - Our first coffee date'
    },
    {
      url: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      title: 'The Proposal',
      description: 'A magical evening under the stars'
    },
    {
      url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      title: 'Our Wedding Day',
      description: 'The day we said "I do"'
    },
    {
      url: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      title: 'Growing Family',
      description: 'Welcoming our beautiful children'
    },
    {
      url: 'https://images.unsplash.com/photo-1474552226712-ac0f0961a954?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      title: 'Adventures Together',
      description: 'Exploring the world hand in hand'
    },
    {
      url: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      title: 'Family Traditions',
      description: 'Creating memories that last a lifetime'
    }
  ];

  const [currentImage, setCurrentImage] = React.useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  React.useEffect(() => {
    const timer = setInterval(() => {
      nextImage();
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id={id} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-dancing text-rose-600 mb-4">Our Journey</h2>
          <p className="text-gray-600">A love story in pictures</p>
        </div>

        <div className="relative">
          <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-lg shadow-xl">
            <div className="relative h-[600px]">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    index === currentImage ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white bg-gradient-to-t from-black/70">
                    <h3 className="text-2xl font-dancing mb-2">{image.title}</h3>
                    <p className="text-white/90">{image.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200"
          >
            <ChevronRight size={24} />
          </button>

          <div className="flex justify-center mt-4 gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  index === currentImage ? 'bg-rose-600 w-4' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-12">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative aspect-w-4 aspect-h-3 overflow-hidden rounded-lg cursor-pointer"
              onClick={() => setCurrentImage(index)}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-200 hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 hover:opacity-100 transition-opacity duration-200">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white bg-gradient-to-t from-black/70">
                  <h4 className="text-lg font-dancing">{image.title}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
