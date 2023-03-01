import React from 'react';

const Button = (props) => {
  let clickFunc;
  switch (props.text) {
    case 'NEW GAME':
      clickFunc = (e) => {
        props.changeState({...props.state, mode: 'game'});
      }
      break;
    case 'END GAME':
      clickFunc = (e) => {
        props.changeState({...props.state, mode: 'main'});
        fetch('/api/addScores', {
          method: 'POST',
          headers: {
            'Content-Type': 'Application/JSON'
          },
          body: JSON.stringify(props.state.players)
        })
        .catch(err => console.log('Failed to add scores to database:', err))
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
    case 'ADD PLAYER':
      clickFunc = (e) => {
        props.changeState({...props.state, popup: props.text});
      }
      break;

  }

  return <button className={props.classes} onClick={clickFunc}>{props.text}</button>
}

export default Button;