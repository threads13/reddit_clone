import React from 'react';

const Community = props => {
  const irc = {
    fontSize: '13px',
    border: '1px solid #e6e6de',
    padding: '5px',
    background: '#fcfcfb'
  }

  const h5 ={
    marginTop: '8px',
    marginBottom: '8px'
  }

  return (
    <div className="community">
      <h3>Community</h3>
      <h5 style={h5}>IRC</h5>
      <p style={irc}>irc.freenode.net #reactjs link</p>
      <h5 style={h5}>On the web:</h5>
      <ul>
        <li>Reactiflux on Discord</li>
        <li>discuss.reactjs.org</li>
        <li>Answers to tagged reactjs on StackOverflow</li>
      </ul>
    </div>
  )
};

export default Community;
