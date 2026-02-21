import React from 'react';
import './BlogSection.css';

const BlogSection = () => {
  return (
    <section className="blog-section section-container">
      <div className="section-content">
        <h2 className="section-title">My Blog</h2>
        <div className="blog-content">
          <div className="blog-image">
            <img src="/3.png"
              alt="Blog - Bible and spiritual content" />
          </div>
          <p>
            Welcome to our blog where we share inspirational messages, teachings, and updates
            from Mount Zion Pentecostal Ministries. Stay connected with our latest spiritual
            insights and community news.
          </p>
          <div className="blog-placeholder">
            <p>Blog content will be updated soon with latest messages and teachings.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
