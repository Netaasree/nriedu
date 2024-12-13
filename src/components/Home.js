import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to Next Step Learning Strategies</h1>
      {/* <div className="sections">
        <div className="section">Study Plan</div>
        <div className="section">Quiz and Analysis</div>
        <div className="section">Badges</div>
      </div> */}
       <div className="image-container">
        <img width="50%" src="C:\Users\bnssr\OneDrive\Desktop\study.jpg" alt="Study" />
      </div>

    </div>
  );
};

export default Home;
