import React from 'react';

const About = () => {
  return (
    <div className="item-group">
      <h3 className="about">About</h3>
      <div style={{borderLeft: '2px solid #f2f2f2'}}>
        <p className="about-text"
          style={{marginLeft: '8px', color: 'black'}}>
          A community for learning and developing web applications using React by Facebook.
        </p>
      </div>
    </div>
  )
};

export default About;
