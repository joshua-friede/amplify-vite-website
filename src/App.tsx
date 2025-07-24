import './App.css';
import { Helmet } from 'react-helmet-async';

function App() {
  return (
    <div className="app">
      <Helmet>
        <title>Josh Friede - Software Engineer at Indeed</title>
        <meta name="description" content="Josh Friede is a backend software engineer at Indeed since 2022, specializing in data engineering and API development. Explore my personal website and upcoming blog about value investing." />
        <meta name="keywords" content="software engineer, backend developer, data engineering, API development, Java, Spring Boot, GraphQL, MongoDB, Kafka, Indeed" />
        <meta name="author" content="Josh Friede" />
        
        
        {/* Additional SEO */}
        <link rel="canonical" href="https://joshfrie.de/" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </Helmet>

      <header className="header" role="banner">
        <nav className="nav" role="navigation" aria-label="Main navigation">
          <div className="nav-brand">
            <h1 className="nav-title">Josh Friede</h1>
          </div>
          <div className="nav-links">
            <a href="#home" className="nav-link active" aria-current="page">Home</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>
        </nav>
      </header>

      <main className="main" role="main" id="main-content">
        <section className="intro" id="home" aria-labelledby="intro-heading">
          <div className="intro-content">
            <h2 className="intro-title" id="intro-heading">
              Hi, I'm <span className="highlight">Josh Friede</span>
            </h2>
            <p className="intro-subtitle">
              Software Engineer at Indeed since 2022
            </p>
            <div className="blog-cta">
              <a href="#about" className="btn btn-blog" aria-describedby="about-description">
                Learn More About Me
              </a>
              <span id="about-description" className="sr-only">
                Explore my background and upcoming blog about value investing and stock analysis
              </span>
            </div>
          </div>
        </section>

        <section className="about" id="about" aria-labelledby="about-heading">
          <div className="about-content">
            <h2 id="about-heading">About Me</h2>
            <div className="about-grid">
              <article className="about-text">
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
              </article>
              <aside className="skills" aria-labelledby="skills-heading">
                <h3 id="skills-heading">Technologies I Work With</h3>
                <div className="skill-tags" role="list" aria-label="Technical skills">
                  <span className="skill-tag" role="listitem">Java</span>
                  <span className="skill-tag" role="listitem">Spring Boot</span>
                  <span className="skill-tag" role="listitem">GraphQL</span>
                  <span className="skill-tag" role="listitem">MongoDB</span>
                  <span className="skill-tag" role="listitem">Kafka</span>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className="contact" id="contact" aria-labelledby="contact-heading">
          <div className="contact-content">
            <h2 id="contact-heading">Let's Connect</h2>
            <p>Here are my professional social profiles and email (not working yet since AWS Amplify basically forces you to use Route 53 nameservers so I can't use my registrar's email forwarding).</p>
            <div className="contact-links" role="list" aria-label="Contact methods">
              <a href="mailto:notworkingyet@joshfrie.de" className="contact-link" role="listitem" aria-label="Send email to Josh Friede">
                <span aria-hidden="true" role="img">📧</span> Email
              </a>
              <a href="https://www.linkedin.com/in/joshua-friede" className="contact-link" target="_blank" rel="noopener noreferrer" role="listitem" aria-label="Visit Josh Friede's LinkedIn profile (opens in new tab)">
                <span aria-hidden="true" role="img">💼</span> LinkedIn
              </a>
              <a href="https://github.com/joshua-friede" className="contact-link" target="_blank" rel="noopener noreferrer" role="listitem" aria-label="Visit Josh Friede's GitHub profile (opens in new tab)">
                <span aria-hidden="true" role="img">🐙</span> GitHub
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer" role="contentinfo">
        <p>&copy; 2025 Joshua Friede. Built with React and AWS Amplify.</p>
      </footer>
    </div>
  );
}

export default App;