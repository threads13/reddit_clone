import React from 'react';

const PostTitle = props => {
  function highlightTitle(){
    if (props.index === 0){
      return "highlightTitle postTitle"
    } else {
      return "postTitle"
    }
  }
  
  return (
    <a
      className={highlightTitle()}
      href={props.url}
    >
      {props.title}
    </a>
  )
};

export default PostTitle;
