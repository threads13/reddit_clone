import React from 'react';
import moment from 'moment';
// install moment and use it to put in correct time

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
