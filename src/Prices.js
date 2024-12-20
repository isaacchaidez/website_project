import React from 'react';
import './Prices.css';

function Prices() {
  return (
    <div className="prices-container">
      <h1>Our Pricing Plans</h1>
      <div className="prices-cards">
        <div className="prices-card">
          <h2>Basic</h2>
          <p>$199 / project</p>
          <ul>
            <li>1-page website</li>
            <li>Basic support</li>
          </ul>
        </div>
        <div className="prices-card">
          <h2>Pro</h2>
          <p>$499 / project</p>
          <ul>
            <li>Multi-page website</li>
            <li>Advanced support</li>
            <li>Mobile optimization</li>
          </ul>
        </div>
        <div className="prices-card">
          <h2>Enterprise</h2>
          <p>Custom Pricing</p>
          <ul>
            <li>Custom development</li>
            <li>Dedicated support</li>
            <li>Full-stack solutions</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Prices;
