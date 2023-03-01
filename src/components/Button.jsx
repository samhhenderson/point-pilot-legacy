import React from 'react';

const Button = (props) => {
  let clickFunc;
  switch (props.text) {
    case 'NEW GAME':
      clickFunc = (e) => props.changeState({...props.state, mode: 'game'});
      break;
    case 'END GAME':
      clickFunc = (e) => props.changeState({...props.state, mode: 'history'});
      break;
  }

  return <button className='button' onClick={clickFunc}>{props.text}</button>
}

export default Button;