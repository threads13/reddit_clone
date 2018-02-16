import React from 'react';
import List from './list/list';
import Sidebar from './sidebar/sidebar';

const Main = props => {
  return (
    <div className="main">
      <List />
      <Sidebar />
    </div>
  )
};

export default Main;