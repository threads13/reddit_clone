import React from 'react';
import Comments from './comments';
import PostTitle from './post_title';
import Author from './author';
import Votes from './votes';
import './actions.css';
import './post_item.css';
import './self.png';

const PostItem = (props) => {
  function thumbnailDisplay(){
    if (thumbnail === "self") {
      return "https://i.gyazo.com/40d1d9eed46af0a095f704d0f67bed1e.png"
    } else if (thumbnail === "default") {
      return "https://i.gyazo.com/dbcc4b53d03a5a3df42da238e9df4b0e.png"
    }

    else {
      return thumbnail
    }
  }

  const { index,
    data: { 
      title,
      url,
      author,
      created_utc,
      ups,
      num_comments,
      thumbnail
    } } = props;

  return (
    <div className="post-item" style={{marginTop: '15px'}}>
      <Votes ups={ups} />
      <div>
        <img className="thumbnail" src={thumbnailDisplay()} alt="thumbnail"/>
      </div>
      <div className="post-content">
        <PostTitle
          title={title}
          url={url}
          index={index}
        />
        <Author
          author={author}
          created={created_utc}
          index={index}
        />
        <div style={{marginBottom: '0px',}} className="actions">
          <Comments
            numComments ={num_comments}
            index={index}
          />
        </div>
      </div>
    </div>
  );
}

export default PostItem;
