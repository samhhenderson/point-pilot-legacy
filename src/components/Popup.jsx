import React from 'react';

const Popup = (props) => {
  let clickFunc1;
  let text;
  let buttonText1;
  let input = null;
  let inputText;

  switch (props.state.popup) {
    case 'ADD PLAYER':
      text = 'Please Enter Player Name'
      input = <input 
        className='textInput'
        type='text' 
        id='newPlayerName' 
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
  }

  return (
    <div className='popup'>
      <h1>{text}</h1>
      {input}
      <button className='button' onClick={clickFunc1}>{buttonText1}</button>
    </div>
  )
}

export default Popup;