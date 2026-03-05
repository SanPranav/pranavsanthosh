import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card } from '../../components';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import './About.css';

const About = () => {
  const [profileImageExists, setProfileImageExists] = useState(false);

  useEffect(() => {
    // Check if profile image exists
    const checkImage = async () => {
      try {
        const response = await fetch('/images/profile.jpg');
        setProfileImageExists(response.ok);
      } catch {
        // Try PNG if JPG doesn't exist
        try {
          const response = await fetch('/images/profile.png');
          setProfileImageExists(response.ok);
        } catch {
          setProfileImageExists(false);
        }
      }
    };
    checkImage();
  }, []);

  const skillProficiency = [
    { skill: 'Programming', proficiency: 90 },
    { skill: 'Robotics', proficiency: 85 },
    { skill: 'Aerospace', proficiency: 80 },
    { skill: 'Leadership', proficiency: 88 },
    { skill: 'Data Analysis', proficiency: 82 },
    { skill: 'SciComm', proficiency: 85 },
    { skill: 'CAD Design', proficiency: 75 },
    { skill: 'Project Mgmt', proficiency: 86 }
  ];

  const apCourses = [
    'AP Biology',
    'AP Calculus AB',
    'AP Calculus BC',
    'AP Chemistry',
    'AP Computer Science A',
    'AP Computer Science Principles',
    'AP English Language',
    'AP Physics Mechanics: C',
    'AP Seminar'
  ];

  const engineeringCourses = [
    'Honors Principles of Engineering'
  ];

  const skills = {
    'Programming Languages': [
      'Python',
      'JavaScript',
      'HTML',
      'CSS',
      'SQL'
    ],
    'Web & API Development': [
      'Full-Stack Development',
      'Frontend Development',
      'Backend Development',
      'APIs & Postman',
      'Bootstrap Framework'
    ],
    'Dev Tools & Workflow': [
      'GitHub & Git',
      'GitFlow',
      'GitHub Copilot',
      'Agile Methodologies',
      'Kanban Board'
    ],
    'Robotics & Engineering': [
      'CAD Design',
      'Aerospace Engineering',
      'Rocket Technology',
      'Open Rocket',
      'GD&T (Geometric Dimensioning)'
    ],
    'Data & Analytics': [
      'Data Analysis',
      'Data Simulation',
      'Scouting',
      'Data Entry & Organization'
    ],
    'Leadership & Project Management': [
      'Leadership',
      'Project Management',
      'Time Management',
      'Event Planning',
      'Organization Skills'
    ],
    'Outreach & Communication': [
      'Educational Outreach',
      'Community Outreach',
      'Collaboration & Communication',
      'Public Speaking',
      'Mentoring'
    ],
    'STEM & Science': [
      'Problem-Solving & Critical Thinking',
      'Calculus',
      'Environmental Science',
      'Materials Science',
      'Earth Science'
    ],
    'Other': [
      'Blogging',
      'AI Prompting',
      'Email Strategy',
      'Study Skills'
    ]
  };

  const experience = [
    {
      dateRange: 'Jun 2023 - Nov 2025',
      position: 'Outreach Assistant',
      company: 'Team Optix 3749 | DNHS FIRST Robotics'
    },
    {
      dateRange: 'Jul 2023 - Present',
      position: 'Software Developer',
      company: 'Open Coding Society'
    },
    {
      dateRange: 'Sep 2023 - Present',
      position: 'TARC Competitor',
      company: 'Del Norte Aerospace | American Rocketry Challenge'
    },
    {
      dateRange: 'Oct 2023 - Mar 2025',
      position: 'Science Olympiad Competitor',
      company: 'Science Olympiad, Inc.'
    },
    {
      dateRange: 'Dec 2023 - Present',
      position: 'Lead Scouter',
      company: 'Team Optix 3749 | DNHS FIRST Robotics'
    },
    {
      dateRange: 'Dec 2024 - Present',
      position: 'Programming Teacher',
      company: 'San Diego Supercomputer Center (SDSC)'
    },
    {
      dateRange: 'Mar 2025 - Sep 2025',
      position: 'Outreach Director',
      company: 'Books4All'
    },
    {
      dateRange: 'Nov 2025 - Present',
      position: 'Vice President of Outreach',
      company: 'Team Optix 3749 | DNHS FIRST Robotics'
    }
  ];

  return (
    <div className="about page-wrapper">
      <motion.section 
        className="about__hero section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container">
          <h1 className="about__title">About Me</h1>
          <p className="about__subtitle"> Aspiring Mechanical Engineer aiming to specialize in Aerospace</p>
        </div>
      </motion.section>

      <motion.section 
        className="about__journey section-sm"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="container">
          <Card className="about__journey-card">
            <h2 className="about__section-title">My Journey</h2>
            <div className="about__profile">
              <div className="about__profile-image">
                {profileImageExists ? (
                  <img 
                    src="/images/profile.jpg" 
                    alt="Pranav Santhosh" 
                    className="about__profile-img"
                    onError={(e) => {
                      // Try PNG if JPG fails
                      e.target.src = '/images/profile.png';
                      e.target.onerror = () => setProfileImageExists(false);
                    }}
                  />
                ) : (
                  <div className="about__image-placeholder">
                    <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <circle cx="12" cy="8" r="5"/>
                      <path d="M3 21c0-4.5 4-8 9-8s9 3.5 9 8"/>
                    </svg>
                    <p className="about__image-text">Add profile.jpg to /public/images/</p>
                  </div>
                )}
              </div>
              <div className="about__journey-content">
                <p className="about__text">
                  Welcome to my digital realm where creativity meets technology. I'm a 
                  passionate aspiring mechanical engineer specializing in aerospace, dedicated to 
                  building cutting-edge solutions that push the boundaries of what's possible.
                </p>
                <p className="about__text">
                  With expertise in aerospace engineering, robotics systems, and digital 
                  innovation, I specialize in creating transformative solutions that make 
                  a real impact. My journey has been driven by a relentless curiosity and 
                  a passion for solving complex problems through elegant design and innovative 
                  thinking.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </motion.section>

      <motion.section 
        className="about__radar section-sm"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="container">
          <Card className="about__radar-card">
            <h2 className="about__section-title">Skill Proficiency</h2>
            <p className="about__radar-description">
              A visual representation of my expertise across different domains
            </p>
            <div className="about__radar-container">
              <ResponsiveContainer width="100%" height={400}>
                <RadarChart data={skillProficiency}>
                  <PolarGrid stroke="#AFCBFF" strokeOpacity={0.3} />
                  <PolarAngleAxis 
                    dataKey="skill" 
                    tick={{ fill: '#E8E8E8', fontSize: 14, fontWeight: 500 }}
                  />
                  <PolarRadiusAxis 
                    angle={90} 
                    domain={[0, 100]}
                    tick={{ fill: '#A0A0A0', fontSize: 12 }}
                    tickCount={6}
                  />
                  <Radar 
                    name="Proficiency" 
                    dataKey="proficiency" 
                    stroke="#AFCBFF" 
                    fill="#AFCBFF" 
                    fillOpacity={0.6}
                    strokeWidth={2}
                  />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: '#1A1A1A',
                      border: '1px solid #AFCBFF',
                      borderRadius: '8px',
                      color: '#E8E8E8'
                    }}
                    formatter={(value) => [`${value}%`, 'Proficiency']}
                  />
                  <Legend 
                    wrapperStyle={{ color: '#E8E8E8' }}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </div>
      </motion.section>

      <motion.section 
        className="about__courses section-sm"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="container">
          <h2 className="about__section-title">Courses</h2>
          <div className="about__courses-grid">
            <Card className="about__course-category">
              <h3 className="about__category-title">Advanced Placement</h3>
              <ul className="about__course-list">
                {apCourses.map((course, index) => (
                  <li key={index} className="about__course-item">
                    {course}
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="about__course-category">
              <h3 className="about__category-title">Engineering</h3>
              <ul className="about__course-list">
                {engineeringCourses.map((course, index) => (
                  <li key={index} className="about__course-item">
                    {course}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </motion.section>

      <motion.section 
        className="about__skills section-sm"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="container">
          <h2 className="about__section-title">Skills & Expertise</h2>
          <div className="about__skills-grid">
            {Object.entries(skills).map(([category, items]) => (
              <Card key={category} className="about__skill-category">
                <h3 className="about__category-title">{category}</h3>
                <ul className="about__skill-list">
                  {items.map((skill, index) => (
                    <li key={index} className="about__skill-item">
                      {skill}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section 
        className="about__experience section-sm"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="container">
          <h2 className="about__section-title">Experience</h2>
          <div className="about__timeline">
            {experience.map((item, index) => (
              <div key={index} className="about__timeline-item">
                <div className="about__timeline-dot"></div>
                <div className="about__timeline-content">
                  <div className="about__timeline-date">{item.dateRange}</div>
                  <div className="about__timeline-position">{item.position}</div>
                  <div className="about__timeline-company">{item.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default About;
