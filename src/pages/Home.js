import React from 'react';
import PosterSection from '../components/PosterSection';
import HeadquartersSection from '../components/HeadquartersSection';
import AboutUsSection from '../components/AboutUsSection';
import ImageGallery from '../components/ImageGallery';
import BlogSection from '../components/BlogSection';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <PosterSection />
      <HeadquartersSection />
      <AboutUsSection />
      <ImageGallery />
      <BlogSection />
    </div>
  );
};

export default Home;
