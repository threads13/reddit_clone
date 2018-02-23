import React from 'react';
import List from './list/list';
import Sidebar from './sidebar/sidebar';
import Post from './list/post';

const Main = props => {
  return (
    <div className="main" style={{background: '#eee'}}>
      <Post />
      <Sidebar />
    </div>
  )
};

export default Main;
