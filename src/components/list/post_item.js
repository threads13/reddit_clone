import React from 'react';
import Actions from './actions';
import './actions.css';
import './post_item.css';

const PostItem = props => {
  return (
    <div className="post-item" style={{marginTop: '15x'}}>

      <p
        className="postTitle"
        >
        {props.data.title}
      </p>
      <p
        style={{fontSize: '11px', color: '#b3b3b3', marginBottom: '4px'}}
        >
        Submitted X hours ago by:  <span style={{color: 'black'}}>{props.data.author}</span>
      </p>
      <div style={{marginBottom: '25px',}} className="actions">
        <a style={{color: '#c05b4d', textDecoration: 'none'}} href="">{props.data.num_comments} comments</a>
        <a className="share" href="">share</a>
        <a className="share"href="">save</a>
        <a className="share"href="">hide</a>
        <a className="share"href="">report </a>
        <hr />
      </div>
    </div>
  );
}

export default PostItem;
//
// <div className="score">
//   {props.data.score}
// </div>
