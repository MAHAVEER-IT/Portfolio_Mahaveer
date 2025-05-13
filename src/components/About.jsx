import { motion } from 'framer-motion';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './About.css';

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section id="about" className="about">
      <div className="about-container">
        <motion.div 
          className="about-header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="profile-image-container">
            <motion.div 
              className="profile-image"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img src="/portfolio_img.png" alt="Mahaveer K" />
            </motion.div>
            <div className="profile-background"></div>
          </div>
          <h2 className="section-title">About Me</h2>
        </motion.div>
        
        <div className="about-content">
          <motion.div 
            className="about-text"
            data-aos="fade-right"
          >
            <p>
              Hi, I'm <span className="highlight">Mahaveer K</span>, a B.Tech student at Sri Eshwar College of Engineering. I'm passionate about software development and specialize in both Flutter and the MERN stack. I enjoy building real-world projects—like Sow&Grow, an agriculture app for farmers, and Note Mate, a productivity web app with AI features.
            </p>
            <p>
              I've done an internship at Better Tomorrow, where I developed and deployed a travel management application. I've also participated in several hackathons, winning prizes and learning to solve problems under pressure. I'm active on coding platforms like LeetCode and HackerRank, and I'm always eager to learn, build, and grow in tech.
            </p>
          </motion.div>
          
          <motion.div 
            className="quick-info"
            data-aos="fade-left"
          >
            <div className="info-item">
              <span className="info-icon">🎓</span>
              <div className="info-content">
                <span className="info-label">Education</span>
                <span className="info-text">B.Tech IT at Sri Eshwar College of Engineering</span>
              </div>
            </div>
            <div className="info-item">
              <span className="info-icon">📍</span>
              <div className="info-content">
                <span className="info-label">Location</span>
                <span className="info-text">Coimbatore, India</span>
              </div>
            </div>
            <div className="info-item">
              <span className="info-icon">💻</span>
              <div className="info-content">
                <span className="info-label">Expertise</span>
                <span className="info-text">MERN Stack, Flutter, Web Development</span>
              </div>
            </div>
            <div className="info-item">
              <span className="info-icon">🏆</span>
              <div className="info-content">
                <span className="info-label">Experience</span>
                <span className="info-text">Internship at Better Tomorrow</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;