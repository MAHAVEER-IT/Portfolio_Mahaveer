import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-links">
          <a href="https://linkedin.com/in/mahaveer-k" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com/MAHAVEER-IT" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
        <p className="copyright">
          © {new Date().getFullYear()} Mahaveer K. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer 