import React from 'react';
import './list.css';
import Post from './post';

const List = props => {
  return (
    <div className="list">
      List Component
      <div>
        <Post />
      </div>
    </div>
  )
}

export default List;
