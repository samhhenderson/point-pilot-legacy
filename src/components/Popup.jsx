import React, { useEffect } from 'react';
import helpers from '../helpers/helperFunctions.jsx';

const Popup = (props) => {
  let clickFunc1;
  let clickFunc2;
  let clickFunc3 = (e) => props.changeState({...props.state, popup: null});
  let text;
  let buttonText1;
  let buttonText2;
  let buttonText3 = 'CANCEL';
  let input = null;
  let inputText;
  let button2 = null;


  //set props and actions for various types of popups
  switch (props.state.popup) {
    case 'ADD PLAYER':
      text = 'Please enter Player name';
      input = <input 
        className='textInput'
        type='text' 
        name='newPlayerName'
        onChange={(e) => inputText = e.target.value}
      />;
      buttonText1 = 'ACCEPT';
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
      text = 'Would you like to upload scores?';
      let players = props.state.players.slice();

      input = <input 
        className='textInput'
        type='text' 
        name='gameName'
        placeholder='Notes: optional'
        onChange={(e) => inputText = e.target.value}
      />;

      //set button 1 to upload data and close game container
      buttonText1 = 'UPLOAD';
      
      let gName;
      props.state.rules.forEach(rule => {
        if (rule._id == props.state.game) {
          gName = rule.game_name;
        }
      })
    
      clickFunc1 = (e) => {
        let requestBody = {
          players: props.state.players,
          gameName: gName,
          gameNotes: inputText
        }
        fetch('/api/addScores', {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'Application/JSON'
          },
          body: JSON.stringify(requestBody)
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
      buttonText2 = 'NO UPLOAD';
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
      text = 'What game would you like to play?';
      const ruleList = [];
      const rules = props.state.rules
      inputText = rules[0]._id;
      rules.forEach(rule => {
        ruleList.push(<option key={rule._id} value={rule._id}>{rule.game_name}</option>)
      })

      input = (
        <select
          className='textInput'
          type='text' 
          name ='gameName'
          onChange={(e) => {
            inputText = e.target.value
          }}
        >
        {ruleList}
        </select>
      );

      buttonText1 = 'ACCEPT';
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