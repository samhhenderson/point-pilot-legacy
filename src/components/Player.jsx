import React from 'react';

const Player = (props) => {
  let controls = []
  let players = props.state.players.slice();
  let plusMinusDisplay;
  let add1 = null;
  let add10 = null;
  let add100 = null;

  const [localState, changeLocalState] = React.useState({
    plusMinus: true
  })

  const changeScore = (e) => {
    if (localState.plusMinus) players[props.index].score += Number(e.target.id);
    else players[props.index].score -= Number(e.target.id);
    return props.changeState({
      ...props.state, 
      players,
    })
  }

  const changePlusMinus = (e) => {
    return changeLocalState({
      ...localState, 
      plusMinus: !localState.plusMinus,
    })
  }

  if (localState.plusMinus) plusMinusDisplay = '+';
  else plusMinusDisplay = '-';

  add1 = <button id='1' className='button controls' onClick={changeScore}>1</button>
  add10 = <button id='10' className='button controls' onClick={changeScore}>10</button>

  const plusMinus = <button id='plusMinus' className='button controls' onClick={changePlusMinus}>{plusMinusDisplay}</button>
  
  controls = (
    <div className='plusMinusCont'>
      {plusMinus}
      {add1}
      {add10}
      {add100}
    </div>
  )


  return (
    <div className='playerCont'>
      <h1 className='playerName'>{props.state.players[props.index].name}</h1>
        {controls}
      <h1 className='scoreDisplay'>{props.state.players[props.index].score}</h1>
    </div>
  )
}

export default Player;