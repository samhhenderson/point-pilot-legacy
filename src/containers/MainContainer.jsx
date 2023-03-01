import React from 'react';
import GameContainer from './GameContainer.jsx';
import HistoryContainer from './HistoryContainer.jsx';
import Button from '../components/Button.jsx'

const MainContainer = (props) => {
  const [mainState, changeMainState] = React.useState({
    mode: 'main',
    popup: null,
    history: null,
    players: [
      {name: 'Sam', score: 0}, //testing only
      //{name: 'Emily', score: '0'} //testing only
    ]
  })
  
  let subDisplay;
  //Display the game if new game is chosen

  switch (mainState.mode) {
    case 'game':
      subDisplay = <GameContainer state={mainState} changeState={changeMainState}/>;
      break;
    case 'history': 
      subDisplay = <HistoryContainer state={mainState} changeState={changeMainState}/>;
      break;
    default:
      subDisplay = null;
  }

  return (
    <div className='mainCont'>
      <Button 
        text='NEW GAME' 
        classes='button big' 
        state={mainState} 
        changeState={changeMainState} 
      />
      {subDisplay}
      <Button 
        text='VIEW HISTORY' 
        classes='button big' 
        state={mainState} 
        changeState={changeMainState} 
      />
    </div>
  )
}

export default MainContainer;