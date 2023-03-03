import React from 'react';

const Player = (props) => {
  let controls = []
  let players = props.state.players.slice();
  let plusMinusDisplay;
  let plusMinus;
  let add1 = null;
  let add10 = null;
  let add100 = null;
  let bets = null;

  const [localState, changeLocalState] = React.useState({
    plusMinus: true,
    bets: 0
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

  const changeBets = (e) => {
    return changeLocalState({
      ...localState, 
      bets: e.target.value,
    })
  }

  //find the rules for the game chosen and apply buttons appropriately 
  props.state.rules.forEach(rule => {
    if (rule._id == props.state.game) {

      if (rule.plus_minus) {
        plusMinus = <button id='plusMinus' className='button controls' onClick={changePlusMinus}>{plusMinusDisplay}</button>;
      }
      if (rule.add_1) {
        add1 = <button id='1' className='button controls' onClick={changeScore}>1</button>;
      }
      if (rule.add_10) {
        add10 = <button id='10' className='button controls' onClick={changeScore}>10</button>
      }
      if (rule.add_100) {
        add100 = <button id='100' className='button controls' onClick={changeScore}>100</button>
      }
      if (rule.bets) {
        bets = 
        <div className='betDisplay'>
          <input 
            id='bets'
            name='bets'
            min='0'
            max='10'
            type='range'
            defaultValue='0'
            className='button controls slider' 
            onClick={changeBets}
          />

            <p>BETS: {localState.bets}</p>

        </div>
      }
    }
  })
  
  controls = (
    <div className='controlsCont'>
      {bets}
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