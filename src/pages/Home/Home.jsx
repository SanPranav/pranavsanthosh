import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card } from '../../components';
import './Home.css';

const Home = () => {
  const navigationCards = [
    {
      path: '/about',
      title: 'About Me',
      description: 'Dive deep into my journey, skills, and the passion that drives my innovations in technology and engineering.',
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
    },
    {
      path: '/work',
      title: 'Contributions',
      description: 'Explore my portfolio of cutting-edge projects, open-source contributions, and revolutionary engineering solutions.',
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
    },
    {
      path: '/blog',
      title: 'Blog & Insights',
      description: 'Read my thoughts on technology trends, engineering practices, and insights from the world of aerospace and robotics.',
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
    },
    {
      path: '/contact',
      title: 'Get in Touch',
      description: 'Ready to collaborate? Let\'s discuss your next project, share ideas, or explore opportunities together.',
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
    },
    {
      path: '/gallery',
      title: 'Gallery',
      description: 'A living mosaic of photos, arranged automatically by image proportions into a puzzle-like composition.',
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="7" height="7" rx="1"/><rect x="14" y="4" width="7" height="4" rx="1"/><rect x="14" y="12" width="7" height="8" rx="1"/><rect x="3" y="15" width="7" height="5" rx="1"/></svg>
    }
  ];

  return (
    <div className="home">
      <section className="home__hero">
        <div className="container">
          <div className="home__hero-content">
            <p className="home__greeting">Meet</p>
            <h1 className="home__title">Pranav Santhosh</h1>
            <p className="home__subtitle">
              Aspiring Aerospace Engineer
            </p>
            <p className="home__description">
              Welcome to my digital realm where creativity meets technology. I specialize 
              in aerospace engineering, robotics systems, business strategy and pushing the boundaries of 
              what's possible through innovation and elegant design.
            </p>
            <div className="home__buttons">
              <Button href="/work" variant="primary" size="large">
                Explore My Work
              </Button>
              <Button href="/contact" variant="secondary" size="large">
                Let's Connect
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="home__stats section">
        <div className="container">
          <div className="home__stats-grid">
            <div className="home__stat-card">
              <div className="home__stat-number">7+</div>
              <div className="home__stat-label">Projects Completed</div>
            </div>
            <div className="home__stat-card">
              <div className="home__stat-number">8+</div>
              <div className="home__stat-label">Leadership Roles</div>
            </div>
            <div className="home__stat-card">
              <div className="home__stat-number">9+</div>
              <div className="home__stat-label">AP Courses</div>
            </div>
            <div className="home__stat-card">
              <div className="home__stat-number">100+</div>
              <div className="home__stat-label">Community Hours</div>
            </div>
          </div>
        </div>
      </section>

      <section className="home__highlights section">
        <div className="container">
          <h2 className="home__section-title">What I Do</h2>
          <div className="home__highlights-grid">
            <Card className="home__highlight-card">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="home__highlight-icon">
                <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
                <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
                <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
                <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
              </svg>
              <h3 className="home__highlight-title">Aerospace Engineering</h3>
              <p className="home__highlight-description">TARC rocket design and competition, with precise altitude control and payload protection.</p>
            </Card>
            <Card className="home__highlight-card">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="home__highlight-icon">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
              </svg>
              <h3 className="home__highlight-title">Robotics & FRC</h3>
              <p className="home__highlight-description">Vice President of Outreach at Team Optix 3749, developing scouting apps and data analysis platforms for competitive robotics.</p>
            </Card>
            <Card className="home__highlight-card">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="home__highlight-icon">
                <polyline points="16 18 22 12 16 6"/>
                <polyline points="8 6 2 12 8 18"/>
              </svg>
              <h3 className="home__highlight-title">Software Development</h3>
              <p className="home__highlight-description">Full-stack development with Python, JavaScript, React, and Flask. Building APIs, web applications, and data visualization tools.</p>
            </Card>
            <Card className="home__highlight-card">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="home__highlight-icon">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
              <h3 className="home__highlight-title">Teaching & Leadership</h3>
              <p className="home__highlight-description">Teaching Python programming at SDSC, mentoring students, and leading community outreach initiatives with environmental impact.</p>
            </Card>
          </div>
        </div>
      </section>

      <section className="home__navigation section">
        <div className="container">
          <h2 className="home__section-title">Discover My World</h2>
          <div className="home__nav-grid">
            {navigationCards.map((card) => (
              <Link key={card.path} to={card.path} className="home__nav-card-link">
                <Card className="home__nav-card">
                  <div className="home__nav-card-icon">{card.icon}</div>
                  <h3 className="home__nav-card-title">{card.title}</h3>
                  <p className="home__nav-card-description">{card.description}</p>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
