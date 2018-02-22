import React, { Component } from 'react';
import Submitted from './submitted_date';
import PostTitle from './post_title';
import Comments from './comments';
import Actions from './actions';
import axios from 'axios';
import PostItem from './post_item';
import './list.css';

const URL = "https://www.reddit.com/r/reactjs.json";

class Post extends Component {
  constructor(props){
    super(props);
    this.state = ({
      entry : { data : { children : [] } }
      });
  }

  componentDidMount(){
    axios.get(URL)
    .then (res => {
      const entry = res.data;
      this.setState({ entry })
      });
    }

  render(){
    const entry = this.state.entry.data.children.map((t, i) => (
        <PostItem
          key={t.id}
          {...t}
          hightlight={i === 0}
        />
    ));

    return (
      <div className="post"
        style={{
          border: 'solid 0.5px #D9D9D9',
          paddingLeft: '10px',
          paddingBottom: '5px',
          background: '#fff',
          borderRadius: '2px'
        }}>

        <div className="list">
          {entry}
        </div>

        {/* <h1><PostTitle post={this.state.post} /></h1> */}
        {/* <h1>title</h1> */}
        {/* <p><Submitted /></p> */}
        <div style={{display: 'flex'}}>
          {/* <Comments /> */}
          {/* {comment} */}
          {/* <Actions /> */}
        </div>
      </div>
    )
  }
};

export default Post;
