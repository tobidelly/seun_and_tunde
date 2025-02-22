import React from 'react';
import { Heart } from 'lucide-react';

const Hero = () => {
  const images = [
    'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-1.2',
    'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80',
    'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80',
    'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80',
    'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80'
  ];

  const [currentImage, setCurrentImage] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImage ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url("${image}")`,
            }}
          >
            <div className="absolute inset-0 bg-black/40" />
          </div>
        </div>
      ))}
      
      <div className="relative h-full flex items-center justify-center text-center">
        <div className="max-w-4xl px-4">
          <h1 className="text-5xl md:text-7xl font-dancing text-white mb-6">
            Sarah & John
          </h1>
          <div className="flex items-center justify-center gap-4 text-white mb-8">
            <div className="h-px w-12 bg-white/70" />
            <Heart className="text-rose-400" size={24} />
            <div className="h-px w-12 bg-white/70" />
          </div>
          <p className="text-xl md:text-2xl text-white font-light mb-4">
            We're Celebrating Our Love Again
          </p>
          <p className="text-lg md:text-xl text-white/90">
            Join us as we renew our vows
          </p>
          <p className="text-2xl md:text-3xl text-white mt-8 font-dancing">
            September 15, 2024
          </p>
        </div>
      </div>

      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-2 h-2 rounded-full transition-all duration-200 ${
              index === currentImage ? 'bg-rose-400 w-4' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;