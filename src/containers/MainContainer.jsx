import React from 'react';
import GameContainer from './GameContainer.jsx';
import HistoryContainer from './HistoryContainer.jsx';
import Button from '../components/Button.jsx'

const MainContainer = (props) => {
  const [mainState, changeMainState] = React.useState({
    mode: 'history',
    players: [
      {name: 'Sam', score: 0}, //testing only
      //{name: 'Emily', score: '0'} //testing only
    ]
  })
  let subDisplay;

  //Display the game if new game is chosen
  if (mainState.mode === 'game') subDisplay = <GameContainer state={mainState} changeState={changeMainState}/>;

  //Display the history page if that is chosen
  if (mainState.mode === 'history') subDisplay = <HistoryContainer state={mainState}/>;

  return (
    <div>
      <header>
        <Button text='NEW GAME' state={mainState} changeState={changeMainState} />
      </header>
      {subDisplay}
      <footer>

      </footer>
    </div>
  )
}

export default MainContainer;