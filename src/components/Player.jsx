import React from 'react';

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
    <div className='playerCont'>
      <h1 className='playerName'>{props.state.players[props.index].name}</h1>
      <div className='plusMinusCont'>
        <button className='button plusMinus' onClick={addScore}>+</button>
        <button className='button plusMinus' onClick={subtractScore}>-</button>
      </div>
      <h1 className='scoreDisplay'>{props.state.players[props.index].score}</h1>
    </div>
  )
}

export default Player;