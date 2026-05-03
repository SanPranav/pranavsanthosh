import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../../components';
import { blogPosts as allBlogPosts } from '../../data/blogData';
import './Blog.css';

const BLOG_NOTICE_STORAGE_KEY = 'blog-placeholder-notice-dismissed';

const Blog = () => {
  const [showNotice, setShowNotice] = useState(false);
  const [isNoticeDismissed, setIsNoticeDismissed] = useState(false);

  useEffect(() => {
    const storedDismissal = window.localStorage.getItem(BLOG_NOTICE_STORAGE_KEY) === 'true';
    setIsNoticeDismissed(storedDismissal);
    setShowNotice(!storedDismissal);
  }, []);

  const dismissNotice = () => {
    window.localStorage.setItem(BLOG_NOTICE_STORAGE_KEY, 'true');
    setIsNoticeDismissed(true);
    setShowNotice(false);
  };

  const reopenNotice = () => {
    setShowNotice(true);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape' && showNotice) {
        dismissNotice();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showNotice]);

  // Convert blog data object to array for mapping
  const blogPosts = Object.values(allBlogPosts);

  return (
    <div className="blog page-wrapper">
      {showNotice && (
        <div className="blog__popup-backdrop" role="presentation" onClick={dismissNotice}>
          <div
            className="blog__popup"
            role="dialog"
            aria-modal="true"
            aria-labelledby="blog-popup-title"
            aria-describedby="blog-popup-description"
            onClick={(event) => event.stopPropagation()}
          >
            <p className="blog__popup-kicker">Notice</p>
            <h2 id="blog-popup-title" className="blog__popup-title">
              These blog posts are placeholders
            </h2>
            <p id="blog-popup-description" className="blog__popup-text">
              I intend to update them soon with the final versions.
            </p>
            <button type="button" className="blog__popup-button" onClick={dismissNotice}>
              Got it
            </button>
          </div>
        </div>
      )}

      {isNoticeDismissed && !showNotice && (
        <button
          type="button"
          className="blog__notice-badge"
          onClick={reopenNotice}
          aria-label="Open blog placeholder notice"
        >
          <span className="blog__notice-badge-icon" aria-hidden="true">⚠</span>
          <span className="blog__notice-badge-text">Blog notice</span>
        </button>
      )}

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
