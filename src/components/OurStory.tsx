import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Book } from 'lucide-react';

const OurStory = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const chapters = [
    {
      title: 'Chapter 1: How it Started',
      content: {
        bride: "Sarah's story begins in a quaint coffee shop on Main Street. As a dedicated art teacher, her mornings always started with a vanilla latte and her sketchbook. That fateful morning, she was working on a particularly challenging piece when a stranger's shadow fell across her page...",
        groom: "John never expected that being late to work would change his life. As a software engineer, his usual routine was precise and calculated. But that morning, his regular coffee shop was closed, leading him to try a new place. There, he saw a beautiful woman completely absorbed in her artwork...",
        image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      }
    },
    {
      title: 'Chapter 2: How it Was',
      content: {
        bride: "The first year was like a dream. Every weekend was a new adventure, from impromptu picnics in the park to midnight stargazing. Sarah discovered that John's analytical mind perfectly complemented her artistic soul, creating a harmony she never knew she needed...",
        groom: "Dating Sarah opened up a whole new world for John. She taught him to see beauty in imperfection, to find joy in spontaneity. Their differences became their strength, and every day brought new discoveries about each other...",
        image: "https://images.unsplash.com/photo-1529634806268-95f85e73e3c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      }
    },
    {
      title: "Chapter 3: How it's Going",
      content: {
        bride: "Five years into marriage, and every day still brings butterflies. We've built a home filled with laughter, art, and technology - a perfect blend of both our worlds. Our weekend coding-and-painting sessions have become our favorite tradition...",
        groom: "Marriage to Sarah has taught me that love isn't just about the big moments - it's in the small daily gestures. It's in the coffee she makes me every morning, in the way she listens to my tech stories even when they don't make sense...",
        image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      }
    },
    {
      title: 'Chapter 4: What the Future Holds',
      content: {
        bride: "As we look to the future, my heart fills with excitement. We dream of traveling the world, teaching art to children in different countries, and maybe opening that tech-art fusion gallery we've been planning...",
        groom: "The future with Sarah is bright and full of possibilities. We're planning to start our own creative technology workshop for kids, combining both our passions. And maybe, just maybe, we'll finally get that beach house we've been dreaming about...",
        image: "https://images.unsplash.com/photo-1474552226712-ac0f0961a954?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      }
    }
  ];

  const nextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, chapters.length - 1));
  };

  const prevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section id="our-story" className="py-20 bg-rose-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-dancing text-rose-600 mb-4">Our Story</h2>
          <div className="flex items-center justify-center gap-2">
            <Book className="text-rose-600" size={24} />
            <p className="text-gray-600">A Tale of Love and Growth</p>
          </div>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <button
              onClick={prevPage}
              disabled={currentPage === 0}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                currentPage === 0 ? 'text-gray-400 cursor-not-allowed' : 'text-rose-600 hover:bg-rose-100'
              }`}
            >
              <ChevronLeft size={20} />
              Previous Chapter
            </button>
            <button
              onClick={nextPage}
              disabled={currentPage === chapters.length - 1}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                currentPage === chapters.length - 1 ? 'text-gray-400 cursor-not-allowed' : 'text-rose-600 hover:bg-rose-100'
              }`}
            >
              Next Chapter
              <ChevronRight size={20} />
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
            <div className="relative h-[300px] overflow-hidden">
              <img
                src={chapters[currentPage].content.image}
                alt={chapters[currentPage].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent" />
              <h3 className="absolute top-8 left-8 text-3xl font-dancing text-white">
                {chapters[currentPage].title}
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-8 p-8">
              <div>
                <h4 className="text-xl font-semibold text-rose-600 mb-4">Sarah's Story</h4>
                <p className="text-gray-600 leading-relaxed">{chapters[currentPage].content.bride}</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-rose-600 mb-4">John's Story</h4>
                <p className="text-gray-600 leading-relaxed">{chapters[currentPage].content.groom}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
