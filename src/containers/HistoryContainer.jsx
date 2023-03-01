import React from 'react';
import HistoryTable from '../components/HistoryTable.jsx';

const HistoryContainer = (props) => {



  return <div className='historyCont'>
    <HistoryTable 
      state={props.state}
    />
    </div>
}

export default HistoryContainer;