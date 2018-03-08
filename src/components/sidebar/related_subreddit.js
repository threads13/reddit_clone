import React from 'react';

const Subreddits = props => {
  return (
    <div className="subreddits" style={{marginTop: '10px'}}>
      <h3>Related Subreddits</h3>
      <ul style={{marginTop: '10px'}}>
          <li><a className="webLinks" href="https://www.reddit.com/r/reactnative/">/r/reactnative</a></li>
          <li><a className="webLinks" href="https://www.reddit.com/r/softwarearchitecture/">/r/softwarearchitecture</a></li>
          <li><a className="webLinks" href="https://www.reddit.com/r/javascript/">/r/javascript</a></li>
          <li><a className="webLinks" href="https://www.reddit.com/r/Frontend/">/r/frontend</a></li>
          <li><a className="webLinks" href="https://www.reddit.com/r/typescript/">/r/typescript</a></li>
          <li><a className="webLinks" href="https://www.reddit.com/r/babeljs/">/r/babeljs</a></li>
          <li><a className="webLinks" href="https://www.reddit.com/r/graphql/">/r/graphql</a></li>
          <li><a className="webLinks" href="https://www.reddit.com/r/SideProject/">/r/sideproject</a></li>
      </ul>
    </div>
  )
};

export default Subreddits;
