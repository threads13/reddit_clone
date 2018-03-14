import React from 'react';
import './info.css';
import './sidebar.css';

const Info = () => {
  return (
    <div className='info item-group'>
      <h3 style={{
          marginBottom: '3px',
          marginTop: '20px'
        }}>
        reactjs
      </h3>
      <p className="about-text">
        1343134 members , <em>234 here</em>
      </p>
    </div>
  )
}

export default Info;
