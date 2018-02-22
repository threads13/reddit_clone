import React from 'react';
import Actions from './actions';
import './actions.css';
import './post_item.css';

const PostItem = props => {
  function hightlightTitle() {
    if (props.hightlight){
      return "postTitle hightlightTitle"
    } else {
      return "postTitle"
    }
  }

  function hightlightAuthor() {
    if (props.hightlight){
      return "hightlightAuthor"
    } else {
      return "reset"
    }
  }

  function highlightBody() {
    if (props.hightlight){
      return "highlightBody"
    } else {
      return "share"
    }
  }

  function highlightComment() {
    if (props.hightlight){
      return "highlightComment"
    } else {
      return "comment"
    }
  }



  return (
    <div className="post-item" style={{marginTop: '15px'}}>
      <div>
        <img className="thumbnail" src={props.data.thumbnail} />
      </div>
      <div className="post-content">
        <a
          style={{textDecoration: 'none'}}
          className={hightlightTitle()}
          href={props.data.url}
        >
          {props.data.title}
        </a>
        <p className="share" style={{marginBottom: '2px'}}>
          Submitted X hours ago by:
          <span className={hightlightAuthor()}>
            {props.data.author}
          </span>
        </p>
        <div style={{marginBottom: '15px',}} className="actions">
          <p>
            <a id="comment" className={highlightComment()} href="">{props.data.num_comments} comments</a>
            <a className={highlightBody()} href="">share</a>
            <a className={highlightBody()} href="">save</a>
            <a className={highlightBody()} href="">hide</a>
            <a className={highlightBody()} href="">report </a>
            <hr style={{marginTop: '15px'}}/>
          </p>
        </div>
      </div>
    </div>
  );
}

export default PostItem;
//
// <div className="score">
//   {props.data.score}
// </div>
