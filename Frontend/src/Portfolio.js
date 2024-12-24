import React from 'react';
import './Portfolio.css';

function Portfolio() {
  const projects = [
    { title: 'E-commerce App', description: 'Built a full-stack online store.' },
    { title: 'Real Estate Platform', description: 'Dynamic property listings and search.' },
    { title: 'Health Tracking App', description: 'Mobile app for health insights.' },
  ];

  return (
    <div className="portfolio">
      <h1>Our Portfolio</h1>
      {projects.map((project, index) => (
        <div key={index} className="portfolio-item">
          <h2>{project.title}</h2>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Portfolio;
