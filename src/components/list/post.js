import React from 'react';
import Submitted from './submitted_date';
import PostTitle from './post_title';
import Comments from './comments';
import Actions from './actions';

const Post = props => {
  return (
    <div className="post" style={{border: 'solid 1px black'}}>
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
