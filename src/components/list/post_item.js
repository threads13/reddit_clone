import React from 'react';
import Actions from './actions';
import './actions.css';
import './post_item.css';
import './self.png';

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

  function thumbnailDisplay(){
    if (props.data.thumbnail === "self") {
      return "self.png"
    } else {
      return props.data.thumbnail
    }
  }

// self = text message icon
// defaul = globe icon

  return (
    <div className="post-item" style={{marginTop: '15px'}}>
      <div className="ups">
        <i style={{marginBottom: '5px'}} class="fas fa-arrow-up"></i>
        <p style={{
            marginTop: '0',
            marginBottom: '0',
            fontSize: '12px',
            display: 'flex',
            justifyContent: 'center'
          }}>
          {props.data.ups}
        </p>
        <i style={{marginTop: '5px'}} class="fas fa-arrow-down"></i>
      </div>
      <div>
        <img className="thumbnail" src={thumbnailDisplay()} />
      </div>
      <div className="post-content">
        <a
          style={{textDecoration: 'none'}}
          className={hightlightTitle()}
          href={props.data.url}
        >
          {props.data.title}
        </a>
        <p className="share" style={{marginBottom: '1px'}}>
          Submitted X hours ago by:
          <span className={hightlightAuthor()}>
            {props.data.author}
          </span>
        </p>
        <div style={{marginBottom: '15px',}} className="actions">
          <p style={{marginTop: '1px', marginBottom: '1px'}}>
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
