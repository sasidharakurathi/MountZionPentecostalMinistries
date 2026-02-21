import React from 'react';
import PosterSection from '../components/PosterSection';
import StatsBar from '../components/StatsBar';
import HeadquartersSection from '../components/HeadquartersSection';
import AboutUsSection from '../components/AboutUsSection';
import EventsSection from '../components/EventsSection';
import ImageGallery from '../components/ImageGallery';
import TestimonialsSection from '../components/TestimonialsSection';
import BlogSection from '../components/BlogSection';
import WatchLiveButton from '../components/WatchLiveButton';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <PosterSection />
      <StatsBar />
      <HeadquartersSection />
      <AboutUsSection />
      <EventsSection />
      <ImageGallery />
      <TestimonialsSection />
      <BlogSection />
      <WatchLiveButton />
    </div>
  );
};

export default Home;
