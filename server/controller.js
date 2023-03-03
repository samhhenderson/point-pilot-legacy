const db = require('./models.js')

const controller = {};

controller.addScores = (req, res, next) => {
  const queryGameVars = [req.body.gameName, req.body.gameNotes] //replace with FE body
  const queryGameString = 
  `INSERT INTO games (game_name, notes)
  VALUES ($1, $2) 
  RETURNING _id;`
  db.query(queryGameString, queryGameVars)
    .then((response) => {
      //pull score object values into an array; then create a set of ($1) arrays 
      //for SQL query in order to perform a multi-row insert
      const game_id = response.rows[0]._id;
      const scoresToInsert = req.body.players;
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

controller.getScores = (req, res, next) => {
  const queryScoreString = 
  `SELECT s._id, s.game_id, g.game_name, g.notes, g.created_at, s.name, s.score
  FROM scores s
  LEFT OUTER JOIN games g
  ON s.game_id = g._id;`;
  db.query(queryScoreString)
    .then((response) => {
      res.locals.scores = response.rows;
      return next();
    })
    .catch((err) => next({
      log: 'controller.getScores',
      message: { err: 'error in controller.getScores ' + err },
    }))
}

controller.getRules = (req, res, next) => {
  const queryScoreString = 
  `SELECT *
  FROM rules`;
  db.query(queryScoreString)
    .then((response) => {
      res.locals.rules = response.rows;
      return next();
    })
    .catch((err) => next({
      log: 'controller.getRules',
      message: { err: 'error in controller.getRules ' + err },
    }))
}

module.exports = controller;