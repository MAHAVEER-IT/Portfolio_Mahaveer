import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="home" className="hero">
      <motion.div 
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="hero-text" variants={itemVariants}>
          <h1>Hi, I'm <span className="highlight">Mahaveer K</span></h1>
          <h2>Software Engineer</h2>
          <p>B.Tech Information Technology at Sri Eshwar College of Engineering, specializing in Flutter development</p>
        </motion.div>

        <motion.div 
          className="tech-stack"
          variants={itemVariants}
        >
          <div className="tech-item">
            <i className="devicon-react-original"></i>
            <span>React</span>
          </div>
          <div className="tech-item">
            <i className="devicon-flutter-plain"></i>
            <span>Flutter</span>
          </div>
          <div className="tech-item">
            <i className="devicon-nodejs-plain"></i>
            <span>Node.js</span>
          </div>
        </motion.div>

        <motion.div 
          className="cta-buttons"
          variants={itemVariants}
        >
          <a href="#projects" className="btn primary">
            View My Work
            <span className="btn-icon">→</span>
          </a>
          <a href="#contact" className="btn secondary">
            Contact Me
            <span className="btn-icon">✉</span>
          </a>
        </motion.div>

        <motion.div 
          className="scroll-indicator"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <span>Scroll Down</span>
          <i className="scroll-arrow">↓</i>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;