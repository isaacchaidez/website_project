import React from "react";
import "./Welcome.css";
import linksVideo from "./links.mp4";
import employeeOne from "./employeeone.jpg";
import employeeTwo from "./employeetwo.jpg"; // Reused for now
import employeeThree from "./employeethree.jpg"; // Reused for now
import employeeFour from "./employeefour.jpg"; // Reused for now

const Welcome = () => {
  return (
    <div className="welcome-container">
      {/* Hero Section */}
      <section className="hero-section" id="hero">
        <div className="video-overlay">
          <video autoPlay loop muted className="background-video">
            <source src={linksVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="hero-content">
          <h1 className="hero-title">Build Your Dream Website Or App</h1>
          <p className="hero-subtitle">
          Transforming Digital Experiences.
          </p>
          <button className="cta-button">Get Started</button>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section" id="services">
        <h2 className="section-title">Our Expertise</h2>
        <p className="section-subtitle">
          Comprehensive services to fuel your growth.
        </p>
        <div className="services-grid">
          <div className="service-card">
            <div className="icon">🌐</div>
            <h3>Web Development</h3>
            <p>
              High-performance web solutions designed to achieve your business
              goals.
            </p>
          </div>
          <div className="service-card">
            <div className="icon">📱</div>
            <h3>Mobile Development</h3>
            <p>
              Cutting-edge mobile apps that offer seamless user experiences.
            </p>
          </div>
          <div className="service-card">
            <div className="icon">🎨</div>
            <h3>UI/UX Design</h3>
            <p>
              Exceptional designs that prioritize functionality and aesthetics.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section" id="about">
        <h2 className="section-title">About Us</h2>
        <p className="about-text">
          At <strong>TopSoftware</strong>, we believe in delivering innovative
          solutions that empower businesses to achieve their goals. With a team
          of dedicated experts, we craft digital experiences that are both
          impactful and sustainable. At TopSoftware we are encouraged to turn your dream application into reality
        </p>
      </section>

      {/* Portfolio Section */}
      <section className="portfolio-section" id="portfolio">
        <h2 className="section-title">Our Work</h2>
        <p className="section-subtitle">
          Explore some of our recent projects.
        </p>
        <div className="portfolio-carousel">
          <div className="portfolio-item">
            <img src={employeeOne} alt="Project 1" />
            <h3>FinTech App</h3>
            <p>Building trust through secure financial solutions.</p>
          </div>
          <div className="portfolio-item">
            <img src={employeeTwo} alt="Project 2" />
            <h3>Healthcare Portal</h3>
            <p>Empowering patients and providers through technology.</p>
          </div>
          <div className="portfolio-item">
            <img src={employeeThree} alt="Project 3" />
            <h3>eCommerce Platform</h3>
            <p>Revolutionizing the way people shop online.</p>
          </div>
          <div className="portfolio-item">
            <img src={employeeFour} alt="Project 4" />
            <h3>Education Hub</h3>
            <p>Driving knowledge-sharing in the digital age.</p>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
<section className="team-section" id="team">
  <h2 className="section-title">Meet the Team</h2>
  <p className="section-subtitle">
    The passionate professionals behind <strong>TopSoftware</strong>.
  </p>
  <div className="team-grid">
    {/* Team Member 1 */}
    <div className="team-card">
      <div className="team-photo-wrapper">
        <img src={employeeOne} alt="Isaac Chaidez" className="team-photo" />
      </div>
      <div className="team-content">
        <h3>Isaac Chaidez</h3>
        <p className="team-role">Co Founder & Project leader </p>
        <p className="team-bio">
          A visionary leader with over 12 years in tech innovation. Isaac drives
          the strategic direction and fosters a culture of excellence at{" "}
          <strong>TopSoftware</strong>.
        </p>
      </div>
    </div>
    {/* Team Member 2 */}
    <div className="team-card">
      <div className="team-photo-wrapper">
        <img src={employeeTwo} alt="Nick Brodsky" className="team-photo" />
      </div>
      <div className="team-content">
        <h3>Nick Brodsky</h3>
        <p className="team-role"> Ceo </p>
        <p className="team-bio">
          Nick brings his expertise in scalable software systems, ensuring all
          projects meet the highest standards of performance and reliability.
        </p>
      </div>
    </div>
    {/* Team Member 3 */}
    <div className="team-card">
      <div className="team-photo-wrapper">
        <img src={employeeThree} alt="Long Nguyen" className="team-photo" />
      </div>
      <div className="team-content">
        <h3>Long Nguyen</h3>
        <p className="team-role">Head of Buissness Development</p>
        <p className="team-bio">
          Long's innovative designs strike the perfect balance between
          functionality and aesthetics, elevating every project he leads.
        </p>
      </div>
    </div>
    {/* Team Member 4 */}
    <div className="team-card">
      <div className="team-photo-wrapper">
        <img src={employeeFour} alt="Devin Shaw" className="team-photo" />
      </div>
      <div className="team-content">
        <h3>Devin Shaw</h3>
        <p className="team-role">Marketing Strategist & Developer</p>
        <p className="team-bio">
          With a keen eye for market trends, Devin develops strategies that
          amplify brand visibility and drive growth for clients. Devin also does the backend development for many projects.
        </p>
      </div>
    </div>
  </div>
</section>



      {/* Contact Section */}
      <section className="contact-section" id="contact">
        <h2 className="section-title">Contact Us</h2>
        <p className="section-subtitle">
          Have questions? Let us know how we can help.
        </p>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>

      {/* Footer Section */}
      <footer className="footer-section">
        <div className="footer-links">
          <a href="#hero">Home</a>
          <a href="#services">Services</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact</a>
        </div>
        <p>© 2024 Interexy. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Welcome;
