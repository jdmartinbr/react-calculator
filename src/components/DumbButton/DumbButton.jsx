import React from 'react';
import './DumbButton.css';

const DumbButton = (props) => {
  return (
    <React.Fragment>
      <input 
        className='m-1 dumb-button btn btn-outline-secondary'
        style={props.width && {width: 'calc(50% + 1rem)'}}
        type='button' 
        value={props.value} 
        onClick={props.handleClick}/>
    </React.Fragment>
  )
};

export default DumbButton;
