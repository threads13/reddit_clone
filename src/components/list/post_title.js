import React from 'react';

const PostTitle = props => {
  function hightlightTitle() {
    if (props.hightlight){
      return "postTitle hightlightTitle"
    } else {
      return "postTitle"
    }
  }
  return (
    <a
      style={{textDecoration: 'none'}}
      className={hightlightTitle()}
      href={props.url}
    >
      {props.title}
    </a>
  )
};

export default PostTitle;
