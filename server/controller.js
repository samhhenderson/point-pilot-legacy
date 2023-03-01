const db = require('./models.js')

const controller = {};

controller.addScores = (req, res, next) => {
  const queryGameVars = ['Nerts', 'Emily lost it bad!'] //replace with FE body
  const queryGameString = 
  `INSERT INTO games (game_name, notes)
  VALUES ($1, $2) 
  RETURNING _id;`
  db.query(queryGameString, queryGameVars)
    .then((response) => {
      //pull score object values into an array; then create a set of ($1) arrays 
      //for SQL query in order to perform a multi-row insert
      const game_id = response.rows[0]._id;
      const scoresToInsert = [{name: 'Sam', score: 10}, {name: 'Emily', score: 100}, {name: 'Julia', score: 90}];
      const pullNameAndScore = (arr) => {
        const result = [];
        arr.forEach((obj) => {
          result.push(obj.name, obj.score, game_id)
        })
        return result
      }
      queryScoreVars = pullNameAndScore(scoresToInsert);
      let queryScoreString = 'INSERT INTO scores (name, score, game_id) VALUES ';
      for (let i = 0; i <= scoresToInsert.length - 1; i++) {
        queryScoreString += `($${i * 3 + 1}, $${i * 3 + 2}, $${i * 3 + 3})`;
        if (i === scoresToInsert.length - 1) queryScoreString += ';'
        else queryScoreString += ','
      }
      db.query(queryScoreString, queryScoreVars)
        .then(next())
    })
    .catch((err) => next({
      log: 'controller.addScores',
      message: { err: 'error in controller.addScores ' + err },
    }));
}

module.exports = controller;