import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../../components';
import { blogPosts as allBlogPosts } from '../../data/blogData';
import './Blog.css';

const Blog = () => {
  // Convert blog data object to array for mapping
  const blogPosts = Object.values(allBlogPosts);

  return (
    <div className="blog page-wrapper">
      <section className="blog__hero section">
        <div className="container">
          <h1 className="blog__title">Blog & Insights</h1>
          <p className="blog__subtitle">
            Thoughts, tutorials, and experiences from my journey in technology and innovation.
          </p>
        </div>
      </section>

      <section className="blog__content section-sm">
        <div className="container">
          <div className="blog__posts">
            {blogPosts.map((post) => (
              <Link key={post.id} to={`/blog/${post.id}`} className="blog__post-link">
                <Card className="blog__post-card">
                  <div className="blog__post-header">
                    <div className="blog__post-icon">{post.icon}</div>
                    <div className="blog__post-meta">
                      <h3 className="blog__post-title">{post.title}</h3>
                      <p className="blog__post-date">{post.date}</p>
                    </div>
                  </div>
                  <p className="blog__post-description">{post.excerpt}</p>
                  <div className="blog__post-tags">
                    {post.tags.map((tag, index) => (
                      <span key={index} className="blog__post-tag">{tag}</span>
                    ))}
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
