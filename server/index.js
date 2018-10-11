const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const bodyParser = require('body-parser');
const cors = require('cors');

require('./models/Car');

mongoose.connect(keys.mongoURI)

const app = express()

app.use(bodyParser.json());
app.use(cors());

//import routes
const carRoutes = require('./routes/carRoutes')

//use routes
app.use(carRoutes)

//logic to check if running in Heroku
if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assets
  // like our main.js file, or main.css file!
  app.use(express.static('client/build'));

  // Express will serve up the index.html file
  // if it doesn't recognize the route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

//since this app is specifically designed for Heroku, I think the '|| 5000' is irrelevant.
const PORT = process.env.PORT || 5000
app.listen(PORT)
