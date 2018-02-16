import React from 'react';

const PostTitle = props => {
  return (
    <div className="post-title"
      style={{display: 'flex', fontSize: '20px'}}
      >
      <strong>
        {props.post}
      </strong>
    </div>
  )
};

export default PostTitle;
