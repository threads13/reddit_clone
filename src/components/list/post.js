import React from 'react';
import Submitted from './submitted_date';
import PostTitle from './post_title';
import Comments from './comments';
import Actions from './actions';

const Post = props => {
  return (
    <div className="post"
      style={{
        border: 'solid 0.5px #D9D9D9',
        paddingLeft: '10px',
        paddingBottom: '5px',
        background: '#fff',
        borderRadius: '2px'
      }}>
      <h1><PostTitle /></h1>
      <p><Submitted /></p>
      <div style={{display: 'flex'}}>
        <Comments />
        <Actions />
      </div>

    </div>
  )
};

export default Post;
