import React, { Component } from 'react';
import Submitted from './submitted_date';
import PostTitle from './post_title';
import Comments from './comments';
import Actions from './actions';
import axios from 'axios';

class Post extends Component {
  constructor(props){
    super(props);

    this.state = {
      post: []
    };
  }

  componentDidMount(){
    axios.get('https://www.reddit.com/r/reactjs.json')
    .then(res => {
      const post = res.data.data.children;
      this.setState({ post });
        // console.log(post[2].data.title);
    });
  }

  render(){
    const post = this.state.post.map((t) => (
      <PostTitle
        {...t}
      />
    ));
    // const post = this.state.post[0].title;
    // console.log(post);
    return (
      <div className="post"
        style={{
          border: 'solid 0.5px #D9D9D9',
          paddingLeft: '10px',
          paddingBottom: '5px',
          background: '#fff',
          borderRadius: '2px'
        }}>
        <h1>{post}</h1>
        {/* <h1></h1> */}
        <p><Submitted /></p>
        <div style={{display: 'flex'}}>
          <Comments />
          <Actions />
        </div>
      </div>
    )
  }
};

export default Post;
