import React from 'react';
import './sidebar.css';
import Info from './info';
import About from './about';
import Links from './links';
import Community from './community';
import Subreddit from './related_subreddit';

const Sidebar = props => {
  return (
    <div className="sidebar" style={{
        border: 'solid 1px #D9D9D9',
        borderRadius: '2px',
      }}>
      <div className="info">
        <Info className="sidebarInfo"/>
        <About className="sidebarInfo" />
        <Links className="sidebarInfo" />
        <Community className="sidebarInfo" />
        <Subreddit className="sidebarInfo" />
      </div>
    </div>
  )
}

export default Sidebar;
