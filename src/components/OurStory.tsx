import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Book } from 'lucide-react';
import teeshirt from './Asset/teeshirt.jpg';
import wedding from './Asset/wedding.jpg';
import inthenow from './Asset/inthenow.jpg';

const OurStory = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const chapters = [
    {
      title: 'Chapter 1: How it Started',
      content: {
        bride: "I met Babatunde through his big brother, Tunbosun Fadeyi. Big bro and his friend were at my school for some empowerment program, and I was asked to mobilize my course mates for this program. I obliged and mobilizes people but I refused to participate in the registration. Big bro and his friend tried so hard to convince me to register. Eventually I gave in and they told me that I'm very stubborn. We filled out the forms and attached our photographs. I found myself laughing and cracking jokes with these strangers...lol. Big bro and his friend left. Here's the interesting part, Babatunde Fadeyi was assigned to process the applications, his bro gave him the gist about this stubborn girl that they had to persuade to register. He got curious and asked for my application, so that he can put a face to the coconut-head girl. He got to my file and said he was drawn to my person. He reached out to me via Facebook, and we were friends for a while, we decided to meet in person after about two 2months of being virtual friends, it was love at first sight. I started praying for God to guide my path and make me make sense of the flutters my heart does every time I see this man. Omg! He is gorgeous, he had this cute baby boy Aura, our chemistry was like butter and jam on a crispy pancake. I was the crispy (hard on the outside, soft on the inside pancake)He was the sweet and buttery yumminess to that menu! He won my heart wit his sweet and buttery Magic. We became best of friends since that day. I didn't say yes until a year later, I had other issues to settle before I could trust him with my heart.",
        groom: "Babe, I was just thinking about something that made me smile—It's funny how little things can take you down memory lane, right? It got me reflecting on how I’ve always had this thing for nurses. Honestly, I had more nurse friends than male friends! There was just something about their passion and care that really made me admire them. But then, I saw you. No makeup, no pretense—just you, pure and real. In that moment, I thought to myself, “Wow, this girl is different.” There was something so refreshing, so captivating about you, and I couldn’t help it. The cupid's arrow had hit me, from there on, I lost guard,our  the rest is a wonderful history.",
        image: teeshirt
      }
    },
    {
      title: 'Chapter 2: How it Was',
      content: {
        bride: "He waited patiently and passed the test of time. He popped the big question a year later and we were engaged for two years. I was convinced he was God's choice for me. He proposed 2 years later, and I took the offer...lol he promised to be my safe place forever, and he has been. May 9th, 2015, we became one in all things.",
        groom: "I simply just called in the feeling that I had won a trophy, it was a distant relationship but she kept me on my toe. She motivated me to be a better version of myself, was always working hard and rubbing her independence in my face, she loved God and loves prayers and she had a good command of english, she was intelligent, I just knew that my kids homework will not suffer.  I knew she was mine forever but I couldn't even wait to give her a proper proposal, as if I would lose her if I don't settle that part. I proposed with an hand-written letter and a ring. She accepted, no sakara this time...lol, she already knew that she won a jackpot....lol. I exchanged her for yam and other stuffs May 9th of 2015. Our honeymoon was 9days long because I had to come back to work in the states. I was worried and heartbroken that I'm leaving my wife behind, so I gifted her with our first fruit. Yes within 9days, sharp shooter ti hit target! (emi okunrin meta!) Olamide was with her and kept her company on my behalf. She was too busy with pregnancy symptoms and school work. First fruit understood the assignment, I said keep my wife busy and be her companion while I'm away. He did, it was a very challenging time for us but we pulled through. ",
        image: wedding
      }
    },
    {
      title: "Chapter 3: How it's Going",
      content: {
        bride: "Here we are 10 years and 3 boys later. We are still one in all things. God has been the anchor that holds our union. We continue to fight our for our love to thrive and prosper. We are thankful for where we are and where God plans to place us in the future. We are a work in progress, perfectly complimenting each other's flaws, we are a team, and our biggest goal is to always have each other's back.",
        groom: "And now, look at us, my baby, we’ve come a long way from that first meeting, haven’t we? Surrounded by the goodness of God, the gift of love that keeps giving, we are still smiling, still loving, and still walking this beautiful journey together. What started as a spark of curiosity has turned into the most amazing love story. Every day, I’m reminded of how lucky I am to have you by my side. All that I saw in you then has only deepened over time, and my heart is fuller than I ever imagined. You still give me panic attacks, lol...It's time to stop forming superwoman, I have won you hands down in many feats (Baba for the Boys for a reason...lol), but it doesn't matter because those trophies, I won for you, My Queen. You now have four knights in shinny armor standing on guard to defend you and shower you with love and respect. Thank you for being the Queen of my heart and the Queen of Boys of the Tunde Fadeyi dynasty. You’re my heart, my forever, and I can’t wait to see what comes next for us. Let's continue to walk and love each other with all our imperfections and inconsistence, Ìfé wa á da lẹ, Amin.",
        image: inthenow
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
            <div className="relative h-[700px] overflow-hidden">
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
                <h4 className="text-xl font-semibold text-rose-600 mb-4">Seun Fadeyi</h4>
                <p className="text-gray-600 leading-relaxed">{chapters[currentPage].content.bride}</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-rose-600 mb-4">Tunde Fadeyi</h4>
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
