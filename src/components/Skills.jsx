import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Skills.css';

const Skills = () => {
  const skills = {
    languages: [
      { name: "C++", level: 90 },
      { name: "Python", level: 85 },
      { name: "Java", level: 80 },
      { name: "JavaScript", level: 85 },
      { name: "Dart", level: 85 },
      { name: "SQL", level: 80 }
    ],
    core: [
      { name: "Data Structures", level: 85 },
      { name: "Algorithms", level: 85 },
      { name: "Problem Solving", level: 90 },
      { name: "System Design", level: 75 }
    ],
    frameworks: [
      { name: "Flutter", level: 90 },
      { name: "React.js", level: 85 },
      { name: "Node.js", level: 80 },
      { name: "Express.js", level: 80 },
      { name: "Socket.io", level: 75 }
    ],
    tools: [
      { name: "Git & GitHub", level: 90 },
      { name: "VS Code", level: 95 },
      { name: "PyCharm", level: 85 },
      { name: "Android Studio", level: 85 },
      { name: "Postman", level: 90 }
    ],
    databases: [
      { name: "MongoDB", level: 85 },
      { name: "Firebase", level: 90 },
      { name: "MySQL", level: 80 }
    ]
  };

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const categoryVariants = {
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
    <section id="skills" className="skills">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="skills-header"
      >
        <h2 className="section-title">Technical Skills</h2>
        <p className="section-subtitle">My technical expertise and proficiency levels</p>
      </motion.div>

      <motion.div
        ref={ref}
        className="skills-container"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {Object.entries(skills).map(([category, items], idx) => (
          <motion.div
            key={category}
            className="skill-category"
            variants={categoryVariants}
          >
            <div className="category-header">
              <span className="category-icon">
                {category === 'languages' ? '💻' :
                 category === 'core' ? '🎯' :
                 category === 'frameworks' ? '⚡' :
                 category === 'tools' ? '🛠️' :
                 '🗄️'}
              </span>
              <h3>{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
            </div>
            <div className="skills-list">
              {items.map((skill, index) => (
                <motion.div
                  key={index}
                  className="skill-item"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-level">{skill.level}%</span>
                  </div>
                  <div className="progress-bar">
                    <motion.div
                      className="progress"
                      initial={{ width: 0 }}
                      animate={{ width: inView ? `${skill.level}%` : 0 }}
                      transition={{ duration: 1, ease: "easeOut" }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;