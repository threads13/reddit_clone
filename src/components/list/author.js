import React from 'react';

const Author = props => {
  function hightlightAuthor() {
    if (props.hightlight){
      return "hightlightAuthor"
    } else {
      return "reset"
    }
  }

  return (
    <p className="share" style={{marginBottom: '1px'}}>
      Submitted by
      <span style={{marginLeft: '4px'}} className={hightlightAuthor()}>
        {props.author}
      </span>
    </p>
  );
}

export default Author;
