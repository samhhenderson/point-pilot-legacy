const db = require('./models.js')

const controller = {};

controller.addScores = (req, res, next) => {
  const queryString = 
  `INSERT INTO scores (_id, name, score)
  VALUES (998, 'FUCKER', 666);`
  db.query(queryString)
    .then((response) => next())
    .catch((err) => next({
      log: 'controller.addScores',
      message: { err: 'error in controller.addScores ' + err },
    }));
}

module.exports = controller;