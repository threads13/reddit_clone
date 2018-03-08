import React from 'react';

const Author = props => {
  function highlightAuthor() {
    if (props.index === 0){
      return "highlightAuthor"
    } else {
      return "reset"
    }
  }

  return (
    <p className="share" style={{marginBottom: '1px'}}>
      Submitted by
      <span style={{marginLeft: '4px'}} className={highlightAuthor()}>
        {props.author}
      </span>
    </p>
  );
}

export default Author;
