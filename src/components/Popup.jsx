import React, { useEffect } from 'react';

const Popup = (props) => {
  let clickFunc1;
  let clickFunc2;
  let clickFunc3 = (e) => {
    props.changeState({...props.state, popup: null})
  }
  let text;
  let buttonText1;
  let buttonText2;
  let buttonText3 = 'CANCEL'
  let input = null;
  let inputText;
  let button2 = null;

  // useEffect(()=> {
  //   const enterEvent = document.addEventListener('keydown', (e) => {
  //     if (e.code === 'Enter') clickFunc1(e);
  //   })
  // })

  //set props and actions for various types of popups
  switch (props.state.popup) {
    case 'ADD PLAYER':
      text = 'Please enter Player name'
      input = <input 
        className='textInput'
        type='text' 
        name ='newPlayerName'
        onChange={(e) => inputText = e.target.value}
      />;
      buttonText1 = 'ACCEPT'
      clickFunc1 = (e) => {
        const players = props.state.players.slice();
        players.push({name: inputText, score: 0})
        props.changeState({
          ...props.state, 
          popup: null,
          players
        });
      }
      break;
    case 'END GAME':
      text = 'Would you like to upload scores?'
      let players = props.state.players.slice();
      
      //set button 1 to upload data and close game container
      buttonText1 = 'UPLOAD'

      clickFunc1 = (e) => {
        fetch('/api/addScores', {
          method: 'POST',
          headers: {
            'Content-Type': 'Application/JSON'
          },
          body: JSON.stringify(props.state.players)
        })
        .then((response) => {

          for (const player of players) {
            player.score = 0;
          }
          props.changeState({
            ...props.state, 
            mode: 'main',
            popup: null,
            players
          });
        })
        .catch(err => console.log('Failed to add scores to database:', err))
      }

      //set button 2 to exit game without uploading data
      buttonText2 = 'NO UPLOAD'
      clickFunc2 = (e) => {
        props.changeState({
          ...props.state, 
          mode: 'main',
          popup: null,
          players
        });
      }
      button2 = <button className='button' onClick={clickFunc2}>{buttonText2}</button>
      break;

    case 'NEW GAME':
      text = 'What game would you like to play?'
      input = <input 
        className='textInput'
        type='text' 
        name ='gameName'
        onChange={(e) => inputText = e.target.value}
      />;
      buttonText1 = 'ACCEPT'
      clickFunc1 = (e) => {
        props.changeState({
          ...props.state, 
          popup: null,
          game: inputText
        });
      }
      clickFunc3 = (e) => {
        props.changeState({
          ...props.state, 
          popup: null,
          mode: 'main'
        })
      }
      break;
  }

  return (
    <div className='popupCont'>
      <h1>{text}</h1>
      {input}
      <div className='buttonCont'>
        <button className='button' onClick={clickFunc1}>{buttonText1}</button>
        {button2}
        <button className='button' onClick={clickFunc3}>{buttonText3}</button>
      </div>
    </div>

  )
}

export default Popup;