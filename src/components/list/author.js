import React from 'react';

const Author = ({ index, author }) => {
  function highlightAuthor() {
    if (index === 0){
      return "highlightAuthor"
    } else {
      return "reset"
    }
  }

  return (
    <p className="share" style={{marginBottom: '1px'}}>
      Submitted by
      <span style={{marginLeft: '4px'}} className={highlightAuthor()}>
        {author}
      </span>
    </p>
  );
}

export default Author;
