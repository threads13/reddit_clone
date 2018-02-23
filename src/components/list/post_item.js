import React from 'react';
import Actions from './actions';
import Comments from './comments';
import PostTitle from './post_title';
import Author from './author';
import './actions.css';
import './post_item.css';
import './self.png';

const PostItem = props => {
  // function hightlightTitle() {
  //   if (props.hightlight){
  //     return "postTitle hightlightTitle"
  //   } else {
  //     return "postTitle"
  //   }
  // }

  // function hightlightAuthor() {
  //   if (props.hightlight){
  //     return "hightlightAuthor"
  //   } else {
  //     return "reset"
  //   }
  // }
  //
  // function highlightBody() {
  //   if (props.hightlight){
  //     return "highlightBody"
  //   } else {
  //     return "share"
  //   }
  // }

  // function highlightComment() {
  //   if (props.hightlight){
  //     return "highlightComment"
  //   } else {
  //     return "comment"
  //   }
  // }

  function thumbnailDisplay(){
    if (props.data.thumbnail === "self") {
      return "https://i.gyazo.com/40d1d9eed46af0a095f704d0f67bed1e.png"
    } else if (props.data.thumbnail === "default") {
      return "https://i.gyazo.com/dbcc4b53d03a5a3df42da238e9df4b0e.png"
    }

    else {
      return props.data.thumbnail
    }
  }

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
        <PostTitle
          title={props.data.title}
          url={props.data.url}
        />
        {/* <a
          style={{textDecoration: 'none'}}
          className={hightlightTitle()}
          href={props.data.url}
        >
          {props.data.title}
        </a> */}
        <Author
          author={props.data.author}
        />
        {/* <p className="share" style={{marginBottom: '1px'}}>
          Submitted X hours ago by:
          <span className={hightlightAuthor()}>
            {props.data.author}
          </span>
        </p> */}
        <div style={{marginBottom: '0px',}} className="actions">
          <Comments
            numComments = {props.data.num_comments}
          />
          {/* <p style={{marginTop: '1px', marginBottom: '1px'}}>
            <a id="comment" className={highlightComment()} href="">{props.data.num_comments} comments</a>
            <a className={highlightBody()} href="">share</a>
            <a className={highlightBody()} href="">save</a>
            <a className={highlightBody()} href="">hide</a>
            <a className={highlightBody()} href="">report </a>
          </p> */}
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
