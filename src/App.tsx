import './App.css';

function App() {
  return (
    <div className="app">
      <header className="header">
        <nav className="nav">
          <div className="nav-brand">
            <h2>Josh Friede</h2>
          </div>
          <div className="nav-links">
            <a href="#home" className="nav-link active">Home</a>
            <a href="#blog" className="nav-link">Blog</a>
          </div>
        </nav>
      </header>

      <main className="main">
        <section className="intro">
          <div className="intro-content">
            <h1 className="intro-title">
              Hi, I'm <span className="highlight">Josh Friede</span>
            </h1>
            <p className="intro-subtitle">
              Welcome to my personal website!
            </p>
            <div className="blog-cta">
              <a href="#blog" className="btn btn-blog">Read My Blog</a>
            </div>
          </div>
        </section>

        <section className="about">
          <div className="about-content">
            <h2>About Me</h2>
            <div className="about-grid">
              <div className="about-text">
                <p>
                  I am a backend software engineer (even though my first coding project was a LAMP stack guest messaging board),
                  but with the power of free-tier agentic AI coding assistants, I am attempting to vibe-code a personal website
                  using whatever the latest javascript framework is rather than PHP.
                </p>
                <p>
                  I have been working at Indeed since 2022 where I mainly do backend data engineering and API development.
                </p>
                <p>
                  Outside of coding my main hobby is value investing and plan to create a blog about my stocks I analyze.
                </p>
              </div>
              <div className="skills">
                <h3>Technologies I Work With</h3>
                <div className="skill-tags">
                  <span className="skill-tag">Java</span>
                  <span className="skill-tag">Spring Boot</span>
                  <span className="skill-tag">GraphQL</span>
                  <span className="skill-tag">MongoDB</span>
                  <span className="skill-tag">Kafka</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="contact" id="contact">
          <div className="contact-content">
            <h2>Let's Connect</h2>
            <p>Here are my professional social profiles and email (not working yet since AWS Amplify basically forces you to use Route 53 nameservers so I can't use my registrar's email forwarding).</p>
            <div className="contact-links">
              <a href="mailto:notworkingyet@joshfrie.de" className="contact-link">
                📧 Email
              </a>
              <a href="https://www.linkedin.com/in/joshua-friede" className="contact-link" target="_blank" rel="noopener noreferrer">
                💼 LinkedIn
              </a>
              <a href="https://github.com/joshua-friede" className="contact-link" target="_blank" rel="noopener noreferrer">
                🐙 GitHub
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2025 Joshua Friede. Built with React, (i think Vite?) and AWS Amplify.</p>
      </footer>
    </div>
  );
}

export default App;