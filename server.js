const express    = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 8080;

app.use(bodyParser);

const names = {};
const animals = [];
let uId = 0;

app.use('/', (req, res, next) => {
  console.log('Request type:', req.method);
  res.send("Hello Chris");
  next();
});

app.get('/names/:name', (req, res) => {
  res.send(names[req.params.name] + "" || "User does not exist");
})

app.post('/names/:name', (req, res,) => {
   names[req.body.name] = uId;
   uId ++;
   res.send(uId);
})

app.post('/names/:name', (req, res,) => {
  names.push(req.params.name);
  res.send(names.join(' '));
})

app.get('/', (req, res) => {
  console.log('This is a get request');
  res.send('<h1>This is a get request</h1>');
});

app.post('/', (req, res) => {
  console.log('This is a post request');
  res.send('<h1>This is a post request</h1>');
});

app.listen(PORT, err => {
  if (err) {
    console.log(`There was an error starting the server: ${err}`);
  } else {
    console.log(`App listening on port ${PORT}`);
  }
});
