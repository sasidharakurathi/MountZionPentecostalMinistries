import React from 'react';
import HeroSection from '../components/HeroSection';
import WorshipSection from '../components/WorshipSection';
import PastorSection from '../components/PastorSection';
import EventsSection from '../components/EventsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import YoutubeSection from '../components/YoutubeSection';
import ContactSection from '../components/ContactSection';
import WatchLiveButton from '../components/WatchLiveButton';
import WhatsAppButton from '../components/WhatsAppButton';
import './Home.css';

const Home = () => (
  <div className="home">
    <HeroSection />
    <PastorSection />
    <WorshipSection />
    <EventsSection />
    <TestimonialsSection />
    <YoutubeSection />
    <ContactSection />
    <WatchLiveButton />
    <WhatsAppButton />
  </div>
);

export default Home;
