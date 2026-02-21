import React from 'react';
import './HeadquartersSection.css';

const HeadquartersSection = () => {
  return (
    <section className="headquarters-section section-container bg-secondary">
      <div className="section-content">
        <h2 className="section-title">Mount Zion Pentecostal Ministries Head Quarters</h2>
        <div className="headquarters-content">
          <div className="headquarters-image">
            <img src="/1.png" 
                 alt="Church building" />
          </div>
          <div className="headquarters-text">
            <p>
              Mount Zion Pentecostal Ministries is the Head Quarters for Ministries and is a growing spiritual community. 
              Our ministry gathers believers together for worship and spiritual growth. The Founder and President of 
              'Mount Zion Pentecostal Ministries' is a God-chosen vessel, endowed with several spiritual gifts. 
              He is a well-known preacher, pastor, singer and spiritual leader. The ministry has planted several 
              churches across different regions and continues to spread the message of Christ's resurrection.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeadquartersSection;
