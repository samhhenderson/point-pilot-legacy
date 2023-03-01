import React from 'react';

const HistoryTable = (props) => {

  const historyData = props.state.history;
  const rows = historyData.map(score => (
    <tr key={score._id}>
      <td>{score.game_id}</td>
      <td>{score.game_name}</td>
      <td>{score.notes}</td>
      <td>{score.created_at}</td>
      <td>{score.name}</td>
      <td>{score.score}</td>
    </tr>
  ))
  return (
    <table className='historyTable'>
      <thead>
        <tr>
          <th>GAME ID</th>
          <th>GAME NAME</th>
          <th>NOTES</th>
          <th>DATE</th>
          <th>PLAYER NAME</th>
          <th>SCORE</th>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
  )
}

export default HistoryTable;