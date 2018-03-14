import React from 'react';

const Votes = ({ ups }) => {
  return (
    <div className="ups">
      <i style={{marginBottom: '5px'}} className="fas fa-arrow-up"></i>
      <p style={{
          marginTop: '0',
          marginBottom: '0',
          fontSize: '12px',
          display: 'flex',
          justifyContent: 'center'
        }}>
        {ups}
      </p>
      <i style={{marginTop: '5px'}} className="fas fa-arrow-down"></i>
    </div>
  );
}

export default Votes;
