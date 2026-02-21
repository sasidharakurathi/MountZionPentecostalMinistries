import React from 'react';
import './HeadquartersSection.css';

const HeadquartersSection = () => {
  return (
    <section className="hq-section">
      <div className="container">

        <div className="hq-heading">
          <h2>Mount Zion Head Quarters</h2>
          <div className="divider"></div>
        </div>

        {/* Video + Text */}
        <div className="hq-split">
          <div className="hq-video">
            <iframe
              src="https://www.youtube.com/embed/yU0rG4HLXqY?si=Hzs8Y5tXWq9fV3R5"
              title="Mount Zion Ministry Service"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="hq-text">
            <h3>About Our Headquarters</h3>
            <p>
              Mount Zion Pentecostal Ministries is a growing spiritual community and the
              nerve centre of our global ministry network. Our ministry gathers believers
              together for worship and spiritual growth. The Founder and President is a
              God-chosen vessel endowed with several spiritual gifts — a well-known
              preacher, pastor, singer and spiritual leader. The ministry has planted
              several churches across different regions and continues to spread the
              message of Christ's resurrection.
            </p>
          </div>
        </div>

        {/* 3-column image gallery */}
        <div className="hq-gallery">
          <div className="hq-gallery-item">
            <img src="/1.png" alt="Ministry gathering 1" />
          </div>
          <div className="hq-gallery-item">
            <img src="/2.png" alt="Ministry gathering 2" />
          </div>
          <div className="hq-gallery-item">
            <img src="/3.png" alt="Ministry gathering 3" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeadquartersSection;
