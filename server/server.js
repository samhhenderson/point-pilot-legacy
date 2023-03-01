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
  console.log(path.join(__dirname, '../src/index.html'))
}

//global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

//start server and listen for requests
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});

module.exports = app;