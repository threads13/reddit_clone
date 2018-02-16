import React from 'react';
import './sidebar.css';
import Info from './info';
import About from './about';
import Links from './links';
import Community from './community';
import Subreddit from './related_subreddit';

const Sidebar = props => {
  return (
    <div className="sidebar" style={{border: 'solid 1px #D9D9D9', borderRadius: '2px'}}>
      <div className="info">
        <Info />
        <p><About /></p>
        <p><Links /></p>
        <p><Community /></p>
        <p><Subreddit /></p>
      </div>
      </div>

  )
}

export default Sidebar;
