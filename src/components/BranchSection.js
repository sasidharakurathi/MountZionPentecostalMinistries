import React from 'react';
import './BranchSection.css';

const BranchSection = () => {
  return (
    <div id="branch-container">
      <p>Mount Zion - Main Branch</p>

      <div id="video-container">
        <div id="branch-video">
          <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/yU0rG4HLXqY?si=Hzs8Y5tXWq9fV3R5" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen
          ></iframe>
        </div>

        <div id="about-branch">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi fugit modi doloremque, minus porro amet voluptates quidem, adipisci debitis molestiae quod, voluptate cum nisi architecto laudantium. Fuga error vel fugiat!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui officia iure, facere eum totam consequatur? Cum, quia. Ad rerum aliquam voluptates vero reprehenderit ullam soluta consectetur recusandae. Illo, molestias eum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BranchSection;
