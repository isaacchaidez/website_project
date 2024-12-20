import React from 'react';
import './Home.css';
import Chatbot from './Chatbot';

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <header className="hero-section">
        <div className="hero-content">
          <h1>Welcome to Top Software</h1>
          <p>Your partner in crafting world-class apps and websites.</p>
          <div>
            <button className="cta-btn primary">Get Started</button>
            <button className="cta-btn secondary">Learn More</button>
          </div>
        </div>
      </header>

      {/* Recent Projects Section */}
      <section className="recent-projects">
        <h2>Recent Projects</h2>
        <div className="slideshow">
          <img src="project1.jpg" alt="Project 1" />
          <img src="project2.jpg" alt="Project 2" />
          <img src="project3.jpg" alt="Project 3" />
        </div>
      </section>

      {/* Chatbot */}
      <Chatbot />
    </div>
  );
}

export default Home;

