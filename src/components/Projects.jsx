import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import edutrackImage from '../assets/edutrack.png';
import bankInsightImage from '../assets/bankinsight.png';
import todoAppImage from '../assets/todo-app.png';
import './Projects.css';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const projects = [
    {
      id: 1,
      title: "EduTrack",
      description: "School Management App with advanced features including attendance tracking, role-based access control, and automated SMS updates for parents. Built with focus on user experience and real-time data synchronization.",
      image: edutrackImage,
      technologies: ["Flutter", "Firebase", "Google Sheets API", "SMS Integration"],
      details: "Team Project • Successfully implemented in local schools",
      github: "https://github.com/MAHAVEER-IT/bank_inish.git",
      drive: "https://drive.google.com/drive/folders/1vxKULPPqAU3odQUJQFvZ8AQCmuWauxas?usp=drive_link"
    },
    {
      id: 2,
      title: "Bank Insight",
      description: "Comprehensive finance management application featuring balance checks, mini-statements, multiple loan calculators, and an integrated expense tracker. Won 3rd prize in hackathon for innovative features.",
      image: bankInsightImage,
      technologies: ["Flutter", "Firebase", "RESTful APIs", "Google Maps"],
      details: "🏆 Hackathon 3rd Prize Winner",
      github: "https://github.com/MAHAVEER-IT/bank_inish.git",
      drive: "https://drive.google.com/drive/folders/13j3pnF7rVRWrvD1OvyUghWhdSVP8HYQR?usp=drive_link"
    },
    {
      id: 3,
      title: "Note Mate",
      description: "Advanced task management application with AI-powered features, intelligent categorization, and real-time collaboration. Includes voice commands and customizable workflows.",
      image: todoAppImage,
      technologies: ["Flutter", "Firebase", "BLoC Pattern", "Local Storage"],
      details: "Featured real-time sync and offline support",
      github: "https://github.com/MAHAVEER-IT/TODO.git",
      drive: "https://drive.google.com/drive/folders/1aw4L8AauleaIyY2qFD_xS3Pkh16XCyKG?usp=drive_link"
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const handleProjectClick = (id) => {
    setActiveProject(activeProject === id ? null : id);
  };

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">Explore my recent work and technical achievements</p>
        </motion.div>
        
        <motion.div
          ref={ref}
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {projects.map((project) => (
            <motion.div 
              key={project.id}
              className={`project-card ${activeProject === project.id ? 'active' : ''}`}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              onClick={() => handleProjectClick(project.id)}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} loading="lazy" />
                <div className="project-overlay">
                  <div className="project-category">
                    {project.technologies[0]}
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-details-wrapper">
                  <div className="technologies">
                    {project.technologies.map((tech, i) => (
                      <motion.span
                        key={i}
                        className="tech-tag"
                        whileHover={{ y: -2, scale: 1.05 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                  
                  {project.details && (
                    <motion.div 
                      className="project-highlight"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <span className="highlight-icon">🏆</span>
                      <p className="project-details">{project.details}</p>
                    </motion.div>
                  )}
                  
                  <div className="project-links">
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-btn github"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <i className="fab fa-github"></i>
                      <span>View Code</span>
                    </a>
                    <a 
                      href={project.drive}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-btn drive"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <i className="fab fa-google-drive"></i>
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          className="cta-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <a 
            href="https://github.com/MAHAVEER-IT"
            target="_blank"
            rel="noopener noreferrer"
            className="view-all-btn"
          >
            View All Projects
            <span>→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;