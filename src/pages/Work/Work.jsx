import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../../components';
import './Work.css';

const Work = () => {
  const projects = [
    {
      title: 'Platformer3x',
      description: 'Contributed to a platformer game project with enhanced gameplay mechanics and improved user experience. Features interactive gameplay elements and responsive controls for an engaging gaming experience.',
      tech: ['JavaScript', 'HTML5', 'CSS3', 'Game Engine'],
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="10" rx="2"/><path d="M6 11h.01M10 11h.01M14 11l2 2M18 11l-2 2"/></svg>,
      links: [
        { label: 'View Code', url: 'https://github.com/nighthawkcoders/platformer3x' },
        { label: 'Live Demo', url: 'https://nighthawkcoders.github.io/platformer3x/' }
      ]
    },
    {
      title: 'Optix Scouting App',
      description: 'Developed a comprehensive scouting application for FRC that allows teams to record and analyze match information. Available on both App Store and Google Play Store for widespread accessibility.',
      tech: ['React Native', 'Mobile Dev', 'Database', 'FRC'],
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/></svg>,
      links: [
        { label: 'App Store', url: '#' },
        { label: 'Play Store', url: '#' }
      ]
    },
    {
      title: 'Optix Scouting Website',
      description: 'The main database platform where the scouting application transfers its data using QR codes. Features data visualization, team analytics, and comprehensive match reporting for FRC teams.',
      tech: ['JavaScript', 'HTML/CSS', 'QR Codes', 'Data Viz'],
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>,
      links: [
        { label: 'View Code', url: 'https://github.com/Team-Optix-3749/Optix-Scouting-WebApp' },
        { label: 'Live Demo', url: 'https://team-optix-3749.github.io/Optix-Scouting-WebApp/' }
      ]
    },
    {
      title: 'Optix Toolkit',
      description: 'A comprehensive toolkit for Team Optix 3749 robotics operations. Streamlines team workflows, manages resources, and provides essential tools for FRC competition preparation and team coordination.',
      tech: ['React', 'TypeScript', 'Team Management', 'FRC'],
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>,
      links: [
        { label: 'View Code', url: 'https://github.com/Team-Optix-3749/OptixToolkit' },
        { label: 'Live Site', url: 'https://tk.team3749.com/' }
      ]
    },
    {
      title: 'CSP Portfolio (Pranav_2025)',
      description: 'A comprehensive portfolio website built for tracking achievements and progress throughout the 2024-2025 academic year. Features project showcases, learning reflections, and skill development documentation.',
      tech: ['HTML', 'CSS', 'JavaScript', 'Portfolio'],
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>,
      links: [
        { label: 'View Code', url: 'https://github.com/SanPranav/Pranav_2025' },
        { label: 'Live Site', url: 'https://sanpranav.github.io/Pranav_2025/' }
      ]
    },
    {
      title: 'Outreach Hours Website',
      description: 'Currently developing a platform for tracking outreach hours and community impact initiatives. Helps club members log and visualize their contributions to community service and outreach programs.',
      tech: ['Web Dev', 'Tracking', 'Community', 'In Progress'],
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
      links: [
        { label: 'View Code', url: 'https://github.com/Team-Optix-3749/otoolkit' },
        { label: 'Live Demo', url: 'https://sanpranav.github.io/Optix-Outreach-Hours-Website/' }
      ]
    },
    {
      title: 'Prism Frontend & Backend',
      description: 'Contributed to a comprehensive CPT project for AP Computer Science Principles. Features both frontend user interface and backend API development with full-stack integration.',
      tech: ['Frontend', 'Backend', 'Full-Stack', 'AP CSP'],
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M12 1v6m0 6v6M5.64 5.64l4.24 4.24m4.24 4.24l4.24 4.24M1 12h6m6 0h6M5.64 18.36l4.24-4.24m4.24-4.24l4.24-4.24"/></svg>,
      links: [
        { label: 'Frontend', url: 'https://github.com/illuminati1618/prism_frontend' },
        { label: 'Backend', url: 'https://github.com/illuminati1618/prism_backend' }
      ]
    }
  ];

  return (
    <div className="work page-wrapper">
      <motion.section 
        className="work__hero section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container">
          <h1 className="work__title">Work & Contributions</h1>
          <p className="work__subtitle">
            Explore my portfolio of projects, innovations, and contributions to the tech community.
          </p>
          <p className="work__team-badge">
            Proud member of <a href="https://github.com/Team-Optix-3749" target="_blank" rel="noopener noreferrer" className="work__team-link">Team Optix 3749</a>
          </p>
        </div>
      </motion.section>

      <section className="work__content section-sm">
        <div className="container">
          <div className="work__grid">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="work__project-card">
                  <div className="work__project-icon">{project.icon}</div>
                  <h3 className="work__project-title">{project.title}</h3>
                  <p className="work__project-description">{project.description}</p>
                  <div className="work__project-tech">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="work__tech-tag">{tech}</span>
                    ))}
                  </div>
                  <div className="work__project-links">
                    {project.links.map((link, linkIndex) => (
                      <a 
                        key={linkIndex} 
                        href={link.url} 
                        className="work__project-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Work;
