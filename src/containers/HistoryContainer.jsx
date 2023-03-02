import React from 'react';
import HistoryTable from '../components/HistoryTable.jsx';
import Button from '../components/Button.jsx';

const HistoryContainer = (props) => {



  return (
    <div className='historyCont'>
      <HistoryTable 
        state={props.state}
      />
      <Button
        text='EXIT HISTORY' 
        classes='button' 
        state={props.state}
        changeState={props.changeState}
      />
    </div>
  )
}

export default HistoryContainer;