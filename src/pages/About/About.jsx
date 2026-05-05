import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Card } from '../../components';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import './About.css';

const About = () => {
  const [imageError, setImageError] = useState(false);
  

  const heroHighlights = [
    {
      label: 'Aerospace',
      value: 'Rocket systems',
      description: 'Designing for flight, precision, and competition.'
    },
    {
      label: 'Robotics',
      value: 'Team leadership',
      description: 'Outreach, scouting, and collaborative build systems.'
    },
    {
      label: 'Software',
      value: 'Full-stack tools',
      description: 'Building apps, APIs, and dashboards that actually help.'
    }
  ];

  const journeyTags = ['Aerospace', 'Robotics', 'Software', 'Photography', 'Outreach', 'Leadership', 'Data Analysis', 'Project Management', 'Community Building'];

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
      dateRange: '2018 - Present',
      position: 'Avid photographer',
      company: 'Personal projects'
    },
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

  // timeline refs and active index for segmented progress
  const itemRefs = useRef([]);
  const progressRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    // clamp refs
    itemRefs.current = itemRefs.current.slice(0, experience.length);

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = Number(entry.target.datasetIndex);
          if (entry.isIntersecting) {
            setActiveIndex(idx);
          } else {
            // if the item leaving was the active one, try to find another visible
            if (activeIndex === idx) {
              const visible = itemRefs.current.findIndex((el) => {
                if (!el) return false;
                const rect = el.getBoundingClientRect();
                return rect.top < window.innerHeight * 0.75 && rect.bottom > window.innerHeight * 0.25;
              });
              setActiveIndex(visible === -1 ? -1 : visible);
            }
          }
        });
      },
      { threshold: 0.55 }
    );

    itemRefs.current.forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, [experience.length, activeIndex]);

  useEffect(() => {
    if (!progressRef.current) return;
    const pct = activeIndex >= 0 ? ((activeIndex + 1) / experience.length) * 100 : 0;
    progressRef.current.style.height = `${pct}%`;
  }, [activeIndex, experience.length]);

  return (
    <div className="about page-wrapper">
      <motion.section
        className="about__hero section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container">
          <div className="about__hero-grid">
            <div className="about__hero-copy">
              <p className="about__eyebrow">Profile</p>
              <h1 className="about__title">About Me</h1>
              <p className="about__subtitle">Aspiring Aerospace engineer.</p>
              <p className="about__hero-summary">
                I work where aerospace, robotics, and software meet. I favor practical systems that solve real problems and
                interfaces that people can use without problems. I also enjoy project management, and business strategy.
              </p>

              <div className="about__journey-tags" aria-label="Core focus areas">
                {journeyTags.map((tag) => (
                  <span key={tag} className="about__journey-tag">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="about__hero-highlights">
                {heroHighlights.map((item) => (
                  <Card key={item.label} className="about__hero-highlight" hover={false}>
                    <div className="about__hero-highlight-label">{item.label}</div>
                    <div className="about__hero-highlight-value">{item.value}</div>
                    <div className="about__hero-highlight-description">{item.description}</div>
                  </Card>
                ))}
              </div>
            </div>

            <Card className="about__hero-panel" hover={false}>
              <div className="about__hero-panel-header">
                <p className="about__hero-panel-kicker">Snapshot</p>
                <h2 className="about__hero-panel-title">What I’m focused on</h2>
              </div>

              <div className="about__profile">
                <div className="about__profile-image-container">
                  {!imageError ? (
                    <img
                      src={`${process.env.PUBLIC_URL}/images/profile.jpg`}
                      alt="Pranav Santhosh"
                      className="about__profile-img-large"
                      onError={(e) => {
                        const img = e.target;
                        if (!img.src.endsWith('.png')) {
                          img.src = `${process.env.PUBLIC_URL}/images/profile.png`;
                        } else {
                          setImageError(true);
                        }
                      }}
                    />
                  ) : (
                    <div className="about__image-placeholder-large">
                      <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <circle cx="12" cy="8" r="5" />
                        <path d="M3 21c0-4.5 4-8 9-8s9 3.5 9 8" />
                      </svg>
                      <p className="about__image-text">Add profile.jpg to /public/images/</p>
                    </div>
                  )}
                </div>
              </div>
            </Card>
          </div>
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
          <Card className="about__journey-card" hover={false}>
            <h2 className="about__section-title">My Journey</h2>
            <div className="about__journey-content">
              <p className="about__text">
                I'm studying aerospace engineering with a focus on rocket design. I am most enganged by hands-on problems: building
                rockets that fly, leading robotics teams, and shipping software that people can rely on. Seeing an idea turn
                into something that works keeps me motivated.
              </p>
              <p className="about__text">
                My background pulls from aerospace, robotics, and full-stack development. The through-line is curiosity: I
                learn by doing. I prefer projects that have a clear, useful outcome for my community and teammates.
              </p>

              <div className="about__journey-grid">
                <Card className="about__journey-mini" hover={false}>
                  <div className="about__journey-mini-label">Approach</div>
                  <div className="about__journey-mini-text">Design with intent, test hard, keep the interface calm.</div>
                </Card>
                <Card className="about__journey-mini" hover={false}>
                  <div className="about__journey-mini-label">What matters</div>
                  <div className="about__journey-mini-text">A mix of craft, usefulness, and measurable progress.</div>
                </Card>
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
          <Card className="about__radar-card" hover={false}>
            <h2 className="about__section-title">Skill Proficiency</h2>
            <p className="about__radar-description">
              A snapshot of my strengths across different areas.
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
                  <Legend wrapperStyle={{ color: '#E8E8E8' }} />
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
            <Card className="about__course-category about__course-all" hover={false}>
              <h3 className="about__category-title">Relevant courses</h3>
              <ul className="about__course-list">
                {[...apCourses, ...engineeringCourses].map((course, index) => (
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
              <Card key={category} className="about__skill-category" hover={false}>
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

          <div className="timeline">
            <ol className="timeline-list">
              {/* progress bar element controlled by JS (segmented height based on active index) */}
              <div
                className="timeline-progress"
                aria-hidden="true"
                ref={progressRef}
                style={{ height: `0%` }}
              />

              {experience.map((item, index) => (
                <li
                  key={index}
                  className={`timeline-item ${activeIndex === index ? 'in-view' : ''}`}
                  ref={(el) => (itemRefs.current[index] = el)}
                  data-index={index}
                >
                  <div className="timeline-marker">
                    <span className={`timeline-dot`} aria-hidden="true" />
                  </div>

                  <div className="timeline-content">
                    <time className="timeline-date">{item.dateRange}</time>
                    <h3 className="timeline-title">{item.position}</h3>
                    <p className="timeline-company">{item.company}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default About;
