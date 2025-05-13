import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Achievements.css';

const Achievements = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const achievements = [
    {
      title: "Freshothon (Project Expo)",
      position: "Third Place",
      icon: "🏆",
      description: "Developed an innovative solution during the freshman project exposition, showcasing technical skills and creativity.",
      date: "2024"
    },
    {
      title: "Hackastrom (36-hour Hackathon)",
      position: "Second Place",
      icon: "🥈",
      description: "Led a team to create a comprehensive solution during an intensive 36-hour coding marathon.",
      date: "2024"
    },
    {
      title: "Tech Trek Hackathon",
      position: "Finalist",
      icon: "🎯",
      description: "Developed and pitched a working prototype in just 8 hours, reaching the final round.",
      date: "2023"
    },
    {
      title: "Vultr Cloud Innovate Hackathon",
      position: "Advanced to Round 2",
      icon: "☁️",
      description: "Selected among top participants for innovative cloud-based solution in GeeksforGeeks hackathon.",
      date: "2023"
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

  const itemVariants = {
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

  return (
    <section id="achievements" className="achievements">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="achievements-header"
      >
        <h2 className="section-title">Achievements</h2>
        <p className="section-subtitle">Recognition and accomplishments in tech competitions</p>
      </motion.div>

      <motion.div
        ref={ref}
        className="achievements-container"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {achievements.map((achievement, index) => (
          <motion.div
            key={index}
            className="achievement-card"
            variants={itemVariants}
            whileHover={{ 
              y: -5,
              transition: { duration: 0.2 }
            }}
          >
            <div className="achievement-content">
              <motion.span 
                className="achievement-icon"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 * index, type: "spring", stiffness: 200 }}
              >
                {achievement.icon}
              </motion.span>
              
              <div className="achievement-details">
                <div className="achievement-header">
                  <h3>{achievement.title}</h3>
                  <span className="achievement-date">{achievement.date}</span>
                </div>
                <div className="achievement-position">
                  <span className="position-badge">{achievement.position}</span>
                </div>
                <p className="achievement-description">{achievement.description}</p>
              </div>
            </div>

            <motion.div 
              className="achievement-shine"
              animate={{
                background: [
                  "linear-gradient(45deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)",
                  "linear-gradient(45deg, transparent 100%, rgba(255,255,255,0.1) 150%, transparent 200%)"
                ],
                x: ["-200%", "200%"]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatDelay: 3
              }}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Achievements;