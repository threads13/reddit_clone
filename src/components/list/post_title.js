import React from 'react';

// maybe instead of trying to map over the titles, and then the comments
// etc i need to just map over everything - then i can return each post component
// as a whole

const PostTitle = ({ titles }) => {

  // const {title} = props;
  // console.log(title);
  // const test = props.post.post.map((t) => {
  //   <span>t</span>
  // });
  // console.log(test);
  return (
    // <div className="post-title"
    //   style={{display: 'flex', fontSize: '20px'}}
    //   >
        <span>{titles}</span>

    // </div>
  )
};

export default PostTitle;
