import React from 'react';

const HistoryTable = (props) => {
  const tableElements = [];
  const data = props.state.history;
  if (data.length !== 0) {

    //Parse through data and put games with common game_id into subarrays
    let rows = [];
    const table = [];
    for (let i = 0; i < data.length; i++) {
      const date = new Date(data[i].created_at)
      const formattedDate = date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      })
      data[i].created_at = formattedDate;
      if (i === 0) rows = [data[i]];
      else if (data[i].game_id !== data[i - 1].game_id) {
        table.push(rows)
        rows = [data[i]];
      }
      else rows.push(data[i])
    }
    table.push(rows)

    //group games together and have single cells for game data
    
    for (let game of table) {

      tableElements.push(
        <tr key={game[0].game_id * 100}>
          <td className='fillerRow' colSpan='6'></td>
        </tr>
      )
      for (let i = 0; i < game.length; i++) {
        if (i === 0) {
          tableElements.push(
            <tr key={game[i]._id}>
              <td rowSpan={game.length}>{game[i].game_id}</td>
              <td rowSpan={game.length}>{game[i].game_name}</td>
              <td rowSpan={game.length}>{game[i].notes}</td>
              <td rowSpan={game.length}>{game[i].created_at}</td>
              <td>{game[i].name}</td>
              <td>{game[i].score}</td>
            </tr>
          )
        }
        else {
          tableElements.push(
            <tr key={game[i]._id}>
              <td>{game[i].name}</td>
              <td>{game[i].score}</td>
            </tr>
          )
        }
      }

    }

  }
  return (
    <div className='tableCont'>
      <table className='historyTable'>
        <colgroup>
          <col className="gameId"/>
          <col className="gameName"/>
          <col className="notes"/>
          <col className="date"/>
          <col className="playerName"/>
          <col className="score"/>
        </colgroup>
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
          {tableElements}
        </tbody>
      </table>
    </div>
  )
}

export default HistoryTable;