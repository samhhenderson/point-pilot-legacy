import React from 'react';
import Button from '../components/Button.jsx'
import Player from '../components/Player.jsx'

const GameContainer = (props) => {
  const players =[]
  props.state.players.forEach((player, i) => {
    players.push(<Player index={i} state={props.state} changeState={props.changeState}/>)
  })

  return (
  <div className='gameCont'>
    <Button text='ADD PLAYER' />
    {players}
    <Button text='END GAME' state={props.state} changeState={props.changeState}/>
  </div>
  )
}

export default GameContainer;