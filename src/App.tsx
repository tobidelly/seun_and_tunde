import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WeddingInfo from './components/WeddingInfo';
import OurStory from './components/OurStory';
import LocateVenue from './components/LocateVenue';
import HowToGetThere from './components/HowToGetThere';
import GiftRegistry from './components/GiftRegistry';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import RSVP from './components/RSVP';
import Footer from './components/Footer';
import WhatsAppChat from './components/WhatsAppChat';
import TravelPack from './components/TravelPack';
import Lodgings from './components/Lodgings';
import DressCode from './components/DressCode';
import ProgramCalendar from './components/ProgramCalendar';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <WeddingInfo />
        <OurStory id="our-story" />
        <LocateVenue id="locate-venue" />
        <HowToGetThere id="how-to-get-there" />
        <ProgramCalendar id="program-calendar" />
        <TravelPack id="travel-guide" />
        <GiftRegistry id="gift-us" />
        <Lodgings id="lodgings" />
        <DressCode id="dress-code" />
        <Contact id="contact-us" />
        <Gallery id="gallery" />
        <RSVP id="rsvp" />
        <WhatsAppChat />
      </main>
      <Footer />
    </div>
  );
}

export default App;