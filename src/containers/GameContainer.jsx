import React from 'react';
import Button from '../components/Button.jsx';
import Player from '../components/Player.jsx';
import Popup from '../components/Popup.jsx';
import helpers from '../helpers/helperFunctions.jsx';

const GameContainer = (props) => {
  const players =[]
  let popup = null;
  let gameName;

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

  props.state.rules.forEach(rule => {
    if (rule._id == props.state.game) {
      gameName = rule.game_name;
    }
  })

  return (
    <div className='gameCont'>
      {popup}
      <h1 id='gameName'>{gameName}</h1>
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