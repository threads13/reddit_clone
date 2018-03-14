import React from 'react';

const Community = () => {
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
    <div className="community item-group">
      <h3>Community</h3>
      <h5 style={h5}>IRC</h5>
      <p style={irc}>irc.freenode.net #reactjs link</p>
      <h5 style={h5}>On the web:</h5>
      <ul>
        <li><a className="webLinks" href="https://discordapp.com/invite/0ZcbPKXt5bZiQhB5">Reactiflux on Discord</a></li>
        <li><a className="webLinks" href="https://discuss.reactjs.org/">discuss.reactjs.org</a></li>
        <li><a className="webLinks" href="https://stackoverflow.com/questions/tagged/reactjs">Answers to tagged reactjs on StackOverflow</a></li>
      </ul>
    </div>
  )
};

export default Community;
