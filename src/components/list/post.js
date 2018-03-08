import React, { Component } from 'react';
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
          key={t.data.id}
          {...t}
          index={i}
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
        <div style={{display: 'flex'}}></div>
      </div>
    )
  }
};

export default Post;
