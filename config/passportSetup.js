const passport = require('passport');
const googleStrategy = require('passport-google-oauth20');
const key = require('./key_dev');
const User = require('../models/userModels');

passport.serializeUser((user, done) => {
    return done(null, user.id);
 });

 passport.deserializeUser((id, done) => {
    User.findById(id).then(user => {
        done(null, user);
    });
});

passport.use(
    new googleStrategy({
        //options for the google strategy
        //auth by keys
        callbackURL: '/auth/google/redirect', 
        clientID: key.googleClientId,
        clientSecret: key.googleClientSecret,
        proxy: true //or provie full url with https in callbackURL
    },
    async (accessToken, refreshToken, profile, done) => {
        //passport callback function
        //exchanging code for user details
        const existingUser = await User.findOne({googleId: profile.id});

        if(existingUser) {
            return done(null, existingUser);
        }
        const user = await new User({ googleId: profile.id, username: profile.displayName}).save();
        done(null, user);
    })
);