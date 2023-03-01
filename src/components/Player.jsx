import React from 'react';
import Button from './Button.jsx';

const Player = (props) => {

  let players = props.state.players.slice();
  const addScore = (e) => {
    players[props.index].score += 1;
    return props.changeState({
      ...props.state, 
      players,
    })
  }

  const subtractScore = (e) => {
    players[props.index].score -= 1;
    return props.changeState({
      ...props.state, 
      players,
    })
  }

  return (
    <div className='player'>
      <h1>{props.state.players[props.index].name}</h1>
      <div className='plusMinusCont'>
        <button className='button' onClick={addScore}>+</button>
        <button className='button' onClick={subtractScore}>-</button>
      </div>
      <h1>{props.state.players[props.index].score}</h1>
    </div>
  )
}

export default Player;