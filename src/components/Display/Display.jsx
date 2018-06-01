import React from 'react';
import './Display.css';

 const Display = (props) => {
  return (
    <React.Fragment>
      <input 
        className={'display form-control w-100 m-1 '+ (props.height ? 'display-top' : 'display-bottom')}
        type='text' 
        value={props.value}
        readOnly />
    </React.Fragment>
  )
};

export default Display;
