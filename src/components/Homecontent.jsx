import React from 'react';
import './Homecontent.css';
import bgImage from '../assets/download.jpg'; 
import kd from '../assets/Soil Nutrient Intelligence.png'; 
import droneTech from '../assets/img2.jpg';
import ddd from '../assets/about.png';

const Homecontent = () => {
  const handleKnowMoreClick = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    // Section aur background styles ko JSX me hi rehne dete hain, kyunki dynamic image hai
    <div
      className="features-section"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="features-grid">

        {/* Card 1: Kisan Drishti */}
        <div className="feature-card">
          <div className="feature-image">
             {/* Dekho, yahan se height aur width hata diya hai */}
            <img src={kd} alt="Kisan Drishti" />
          </div>
          <div className="feature-content">
            <h1 className="h1-green">KISAN DRISHTI</h1>
            <p>
              Revolutionary soil-level diagnostics that empower farmers with precise, real-time agricultural intelligence.
            </p>
            <div className="feature-stats">
              <span>50+ Parameters</span>
              <a href="https://kisandrishti.in" target="_blank" rel="noopener noreferrer">
                <button>Click To View</button>
              </a>
            </div>
          </div>
        </div>

        {/* Card 2: Our Courses */}
        <div className="feature-card right-image">
          <div className="feature-content">
            <h1 className="h1-blue">OUR COURSES</h1>
            <p>
              AI-piloted drones transforming agri-logistics with precision mapping, crop monitoring, and automated field operations.
            </p>
            <div className="feature-stats">
              <span>Autonomous Flight</span>
              <a href="https://hokage-deepanshu.github.io/dronetech/" target="_blank" rel="noopener noreferrer">
                <button>Click To View</button>
              </a>
            </div>
          </div>
          <div className="feature-image">
            {/* Yahan se bhi height aur width hata diya hai */}
            <img src={droneTech} alt="Drone Tech" />
          </div>
        </div>

        {/* Card 3: More About Us */}
        <div className="feature-card">
          <div className="feature-image">
            {/* Aur yahan se bhi! */}
            <img src={ddd} alt="About Us illustration" />
          </div>
          <div className="feature-content">
            <h1 className="h1-gradient">MORE ABOUT US</h1>
            <p>
              Infyra Innovations is a deeptech systems company building scalable intelligence across smart agriculture, autonomous drones, and edge-AI infrastructure.
            </p>
            <div className="feature-stats">
              <span>Edge Computing</span>
              <span onClick={handleKnowMoreClick} className="know-more-btn">Know More</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homecontent;