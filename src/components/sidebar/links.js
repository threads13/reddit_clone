import React from 'react';

const Links = props => {
  return (
    <div style={{marginTop: '10px'}}>
      <h3>Helpful Links</h3>
      <ul style={{marginTop: '10px'}}>
        <li><a className="webLinks" href="https://github.com/enaqx/awesome-react">Awesome React</a></li>
        <li><a className="webLinks" href="https://github.com/enaqx/awesome-react">Babel (JSX compiler)</a></li>
        <li><a className="webLinks" href="https://github.com/markerikson/react-redux-links"> React Redux Links</a></li>
      </ul>
    </div>
  )
};

export default Links;
