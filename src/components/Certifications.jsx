import { useState, useEffect } from 'react'
import './Certifications.css'

const Certifications = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.querySelector('#certifications');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const certifications = [
    {
      name: "C Language Certification",
      issuer: "Udemy",
      icon: "💻",
      year: "2024",
      description: "Mastered advanced C programming concepts"
    },
    {
      name: "Python Certificate",
      issuer: "HackerRank",
      icon: "🐍",
      year: "2024",
      description: "Problem solving and algorithms in Python"
    },
    {
      name: "DSA Course in C & C++",
      issuer: "Udemy",
      icon: "🔍",
      year: "2024",
      description: "Data structures and algorithm implementation"
    },
    {
      name: "Flutter Bootcamp",
      issuer: "5-Day Intensive",
      icon: "📱",
      year: "2024",
      description: "Mobile app development with Flutter"
    },
    {
      name: "LetsUpgrade Bootcamp",
      issuer: "5-Day Program",
      icon: "🚀",
      year: "2024",
      description: "Full-stack development intensive training"
    }
  ];

  return (
    <section 
      id="certifications" 
      className={`certifications ${isVisible ? 'fade-in' : ''}`}
    >
      <h2 className="section-title">Professional Certifications</h2>
      <div className="certifications-container">
        {certifications.map((cert, index) => (
          <div 
            key={index} 
            className="certification-card"
            style={{
              animation: isVisible ? `slideUp 0.5s ease forwards ${index * 0.1}s` : 'none',
              opacity: 0
            }}
          >
            <span className="cert-icon">{cert.icon}</span>
            <div className="cert-details">
              <h3>{cert.name}</h3>
              <p>{cert.issuer} • {cert.year}</p>
              <p style={{ fontSize: '0.85rem', marginTop: '0.5rem', color: '#666' }}>
                {cert.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Certifications