import React from 'react';
import Comments from './comments';
import PostTitle from './post_title';
import Author from './author';
import Votes from './votes';
import './actions.css';
import './post_item.css';
import './self.png';

const PostItem = props => {
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
      <Votes ups={props.data.ups} />
      <div>
        <img className="thumbnail" src={thumbnailDisplay()} alt="thumbnail"/>
      </div>
      <div className="post-content">
        <PostTitle
          title={props.data.title}
          url={props.data.url}
        />
        <Author
          author={props.data.author}
          created={props.data.created_utc}
        />
        <div style={{marginBottom: '0px',}} className="actions">
          <Comments numComments = {props.data.num_comments}/>
        </div>
      </div>
    </div>
  );
}

export default PostItem;
