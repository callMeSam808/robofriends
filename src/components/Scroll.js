import React from 'react';

const Scroll = (props) => {
  return (
    <div style={{overflowY: 'scroll', border: '5px solid rgb(66, 56, 56)', height: '500px'}}>
      {props.children}
    </div>
  );
}

export default Scroll;