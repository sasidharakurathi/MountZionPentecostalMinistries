import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import WorshipSection from '../components/sections/WorshipSection';
import PastorSection from '../components/sections/PastorSection';
import EventsSection from '../components/sections/EventsSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import YoutubeSection from '../components/sections/YoutubeSection';
import ContactSection from '../components/sections/ContactSection';
import WatchLiveButton from '../components/common/WatchLiveButton';
import WhatsAppButton from '../components/common/WhatsAppButton';
import SEO from '../components/common/SEO';
import './Home.css';

const Home = () => (
  <div className="home">
    <SEO
      title="Welcome to Our Headquarters"
      description="Join Mount Zion Pentecostal Ministries for life-changing worship, powerful sermons, and deep community fellowship."
    />
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
