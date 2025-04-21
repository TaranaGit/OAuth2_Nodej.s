const express = require('express');
const session = require('express-session');
const passport = require('passport');
require('dotenv').config();
require('./config/passport'); // load Google strategy


const app = express();

// Set EJS view engine
app.set('view engine', 'ejs');

// Session middleware
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}));

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/auth', require('./routes/auth'));

app.get('/', (req, res) => {
  res.render('home', { user: req.user });
});


app.listen(3000, () => {
        console.log('Server started on port 3000');
      });



