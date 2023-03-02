import React from 'react';
import Button from '../components/Button.jsx';
import Player from '../components/Player.jsx';
import Popup from '../components/Popup.jsx';

const GameContainer = (props) => {
  const players =[]
  let popup = null;
  props.state.players.forEach((player, i) => {
    players.push(<Player
      key={i} 
      index={i} 
      state={props.state} 
      changeState={props.changeState}
      />)
  })

  if (props.state.popup !== null) {
    popup = <Popup state={props.state} changeState={props.changeState}/>
  }

  return (
  <div className='gameCont'>
    {popup}
    <h1 id='gameName'>{props.state.game}</h1>
    {players}
    <div id='gameButtonsCont'>
      <Button 
        text='ADD PLAYER' 
        classes='button' 
        state={props.state}
        changeState={props.changeState}
      />
      <Button 
        text='END GAME' 
        classes='button' 
        state={props.state} 
        changeState={props.changeState}
      />
    </div>
  </div>
  )
}

export default GameContainer;