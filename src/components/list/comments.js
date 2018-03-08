import React from 'react';

const Comments = props => {
  function highlightBody() {
    if (props.index === 0){
      return "highlightBody"
    } else {
      return "share"
    }
  }

  function highlightComment() {
    if (props.index === 0){
      return "highlightComment"
    } else {
      return "comment"
    }
  }

  return (
    <p style={{marginTop: '1px', marginBottom: '1px'}}>
      <a id="comment" className={highlightComment()} href="">{props.numComments} comments</a>
      <a className={highlightBody()} href="">share</a>
      <a className={highlightBody()} href="">save</a>
      <a className={highlightBody()} href="">hide</a>
      <a className={highlightBody()} href="">report </a>
    </p>
  )
};

export default Comments;
