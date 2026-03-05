import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../../data/blogData';
import { Button } from '../../components';
import './BlogPost.css';

const BlogPost = () => {
  const { postId } = useParams();
  const post = blogPosts[postId];

  if (!post) {
    return (
      <div className="blogpost page-wrapper">
        <div className="container" style={{ paddingTop: 'var(--spacing-12)' }}>
          <h1 className="blogpost__title">Post Not Found</h1>
          <p className="blogpost__text">Sorry, the blog post you're looking for doesn't exist.</p>
          <Link to="/blog">
            <Button variant="primary">← Back to Blog</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="blogpost page-wrapper">
      <article className="blogpost__container">
        <header className="blogpost__header">
          <Link to="/blog" className="blogpost__back-link">
            ← Back to Blog
          </Link>
          
          <div className="blogpost__hero">
            <div className="blogpost__icon">{post.icon}</div>
            <h1 className="blogpost__title">{post.title}</h1>
            <p className="blogpost__subtitle">{post.subtitle}</p>
            
            <div className="blogpost__meta">
              <span className="blogpost__date">{post.date}</span>
              <span className="blogpost__author">By {post.author}</span>
            </div>

            <div className="blogpost__tags">
              {post.tags.map((tag, index) => (
                <span key={index} className="blogpost__tag">{tag}</span>
              ))}
            </div>
          </div>
        </header>

        <div className="blogpost__content" dangerouslySetInnerHTML={{ __html: post.content }} />

        <footer className="blogpost__footer">
          <div className="blogpost__footer-separator"></div>
          <div className="blogpost__navigation">
            <Link to="/blog" className="blogpost__nav-button">
              <Button variant="secondary">← All Posts</Button>
            </Link>
          </div>
        </footer>
      </article>
    </div>
  );
};

export default BlogPost;
