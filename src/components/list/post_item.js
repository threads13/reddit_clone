import React from 'react';
import Actions from './actions';
import './actions.css';
import './post_item.css';

const PostItem = props => {
  return (
    <div className="post-item" style={{marginTop: '20px'}}>
      <p style={{color: '#c05b4d', fontSize: '20px'}}>
        {props.data.title}
      </p>
      <p style={{fontSize: '10px'}}
        >
        Submitted X hours ago by:  {props.data.author}
      </p>
      <div style={{marginBottom: '50px'}} className="actions">
        <a style={{color: '#c05b4d'}} href="">comment</a>
        <a href="">share</a>
        <a href="">save</a>
        <a href="">hide</a>
        <a href="">report </a>
      </div>
    </div>
  );
}

export default PostItem;
