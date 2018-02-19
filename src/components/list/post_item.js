import React from 'react';
import Actions from './actions';
import './actions.css';
import './post_item.css';

const PostItem = props => {
  return (
    <div className="post-item" style={{marginTop: '35x'}}>
      <p style={{color: '#c05b4d', fontSize: '20px', marginBottom: '4px'}}>
        {props.data.title}
      </p>
      <p style={{fontSize: '11px', color: '#b3b3b3', marginBottom: '4px'}}
        >
        Submitted X hours ago by:  <span style={{color: 'black'}}>{props.data.author}</span>
      </p>
      <div style={{marginBottom: '35px',}} className="actions">
        <a style={{color: '#c05b4d'}} href="">{props.data.num_comments} comments</a>
        <a href="">share</a>
        <a href="">save</a>
        <a href="">hide</a>
        <a href="">report </a>
      </div>
      <hr />
    </div>
  );
}

export default PostItem;
