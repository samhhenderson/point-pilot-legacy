import React from 'react';
import GameContainer from './GameContainer.jsx';
import HistoryContainer from './HistoryContainer.jsx';
import Button from '../components/Button.jsx'
import githubmark from '../img/github-mark.png';

const MainContainer = (props) => {
  let overlay = null;
  
  const [mainState, changeMainState] = React.useState({
    mode: 'main',
    popup: null,
    history: null,
    game: null,
    rules: null,
    players: []
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
      subDisplay = (
        <div className='mainButtonCont'>
          <Button 
            text='NEW GAME' 
            classes='button big' 
            state={mainState} 
            changeState={changeMainState} 
          />
          <Button 
            text='VIEW HISTORY' 
            classes='button big historyBtn' 
            state={mainState} 
            changeState={changeMainState} 
          />
        </div>
      )
  }

  if (mainState.popup !== null) overlay = <div id="overlay"></div>

  return (

    <div className='mainCont'>
      <h1 id='mainTitle'>SCOREBOARD</h1>
      {overlay}
      {subDisplay}
      <footer>
        <p>© Copyright 2023 Sam Henderson</p>
        <a href='https://github.com/samhhenderson/solo-project'>
          <img id='githublogo' src={'../img/github-mark.png'}></img>
        </a>
      </footer>
    </div>
  )
}

export default MainContainer;