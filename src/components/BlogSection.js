import React from 'react';
import './BlogSection.css';

const posts = [
  {
    img: '/4.png',
    tag: 'Worship',
    title: 'Experiencing the Presence of God in Every Gathering',
    excerpt:
      'Our Sunday services are a time of deep fellowship, Spirit-led worship and the Word of God preached with power...',
  },
  {
    img: '/5.png',
    tag: 'Faith',
    title: 'Growing Stronger Through Prayer and Fasting',
    excerpt:
      'Discover how Mount Zion believers build extraordinary spiritual strength through dedicated prayer and fasting practices...',
  },
  {
    img: '/6.png',
    tag: 'Community',
    title: 'Serving Our Neighbours – Community Outreach Updates',
    excerpt:
      'Ministry is not only within the four walls of the church. See how our congregation is impacting the wider community...',
  },
];

const BlogSection = () => {
  return (
    <section className="blog-section">
      <div className="container">
        <div className="blog-heading">
          <h2>My Blog</h2>
          <div className="divider"></div>
        </div>

        <div className="blog-cards">
          {posts.map((post, i) => (
            <article className="blog-card" key={i}>
              <div className="blog-card-img">
                <img src={post.img} alt={post.title} />
              </div>
              <div className="blog-card-body">
                <span className="blog-card-tag">{post.tag}</span>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <a href="/blog" className="blog-read-more">
                  Continue Reading →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
