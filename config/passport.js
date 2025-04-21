const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
require('dotenv').config();

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: '/auth/google/callback',
}, (accessToken, refreshToken, profile, done) => {
  // Here, profile contains user info from Google
  console.log(profile);
  return done(null, profile); // pass user profile to serialize
}));

// store user in session
passport.serializeUser((user, done) => {
  done(null, user);
});

// retrieve user from session
passport.deserializeUser((user, done) => {
  done(null, user);
});
