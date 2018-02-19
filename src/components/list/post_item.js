import React from 'react';
import Actions from './actions';
import './actions.css';
import './post_item.css';

const PostItem = props => {
  return (
    <div className="post-item" style={{marginTop: '15px'}}>
      <a style={{textDecoration: 'none'}} className="postTitle" href={props.data.url}>
        {props.data.title}
      </a>
      <p className="share" style={{marginBottom: '2px'}}>
        Submitted X hours ago by:  <span style={{color: 'black'}}>{props.data.author}</span>
      </p>
      <div style={{marginBottom: '15px',}} className="actions">
        <a style={{color: '#c05b4d', textDecoration: 'none', marginLeft: '0'}} href="">{props.data.num_comments} comments</a>
        <a className="share" href="">share</a>
        <a className="share"href="">save</a>
        <a className="share"href="">hide</a>
        <a className="share"href="">report </a>
        <hr style={{marginTop: '15px'}}/>
      </div>
    </div>
  );
}

export default PostItem;
//
// <div className="score">
//   {props.data.score}
// </div>
