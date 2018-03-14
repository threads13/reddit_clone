import React from 'react';
import Sidebar from './sidebar/sidebar';
import Post from './list/post';

const Main = () => {
  return (
    <div className="main" style={{background: '#eee'}}>
      <Post />
      <Sidebar />
    </div>
  )
};

export default Main;
