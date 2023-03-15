const express = require('express')
const path = require('path');
const controller = require('./controller.js')

const app = express();

const PORT = 3000;

//parse request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//handle requests for static files
if (process.env.NODE_ENV === 'production') {
  app.use('/dist', express.static(path.resolve(__dirname, '../dist')));
  app.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../src/index.html'))
  })
}

//route for api calls
app.post('/api/addScores', controller.addScores, (req, res) => {
  return res.sendStatus(200)
})

app.get('/api/getScores', controller.getScores, (req, res) => {
  return res.status(200).json(res.locals.scores);
})

app.get('/api/getRules', controller.getRules, (req, res) => {
  return res.status(200).json(res.locals.rules);
})

//catch any requests not handled by our routers
app.use((req, res) => res.status(404).send('Page was not found, sorry!'))

//global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred:' + err },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.message);
  return res.status(errorObj.status).json(errorObj.message);
});

//start server and listen for requests
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});

module.exports = app;