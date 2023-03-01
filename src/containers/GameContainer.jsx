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
    <Button 
      text='ADD PLAYER' 
      classes='button' 
      state={props.state}
      changeState={props.changeState}
    />
    {players}
    <Button 
      text='END GAME' 
      classes='button' 
      state={props.state} 
      changeState={props.changeState}
    />
  </div>
  )
}

export default GameContainer;