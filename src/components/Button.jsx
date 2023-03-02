import React from 'react';

const Button = (props) => {
  let clickFunc;
  switch (props.text) {
    case 'NEW GAME':
      clickFunc = (e) => {
        props.changeState({
          ...props.state, 
          mode: 'game',
          popup: 'NEW GAME'
        });
      }
      break;
    case 'VIEW HISTORY':
      clickFunc = (e) => {
        fetch('/api/getScores', {
          method: 'GET',
          headers: {
            'Content-Type': 'Application/JSON'
          },
        })
        .then(response => response.json())
        .then(data => {
          props.changeState({...props.state, history: data, mode: 'history'});
        })
        .catch(err => console.log('Failed to get scores from database:', err))

      }
      break;
    case 'EXIT HISTORY':
      clickFunc = (e) => {
        props.changeState({...props.state, mode: 'main'});
      }
      break;
    //for all buttons that result in a popup like END GAME, ADD PLAYER, etc
    default:
      clickFunc = (e) => {
        props.changeState({...props.state, popup: props.text});
      }

  }

  return <button className={props.classes} onClick={clickFunc}>{props.text}</button>
}

export default Button;