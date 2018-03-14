import React from 'react';

const PostTitle = ({ title, url, index }) => {
  function highlightTitle(){
    if (index === 0){
      return "highlightTitle postTitle"
    } else {
      return "postTitle"
    }
  }

  return (
    <a
      className={highlightTitle()}
      href={url}
    >
      {title}
    </a>
  )
};

export default PostTitle;
