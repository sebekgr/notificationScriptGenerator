const express = require('express');
const app = express();
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const passportSetup = require('./config/passportSetup');
const mongoose = require('mongoose');
const key = require('./config/key_dev');
const cookieSession = require('cookie-session');
const passport = require('passport');
const PORT = process.env.PORT || 9000;

//connect with db
mongoose.connect(key.mongoDB, () => { console.log('connected to mongoDB')});

//cookie
app.use(cookieSession({
    maxAge: 24 * 60 * 60* 1000,
    keys: [key.cookie]
}));

//init passport
app.use(passport.initialize());
app.use(passport.session());

//set up routes
app.use('/auth', authRoutes);
app.use('/profile', userRoutes);

//create home route
app.get('/', (req, res) => {
    res.send('home');
});

app.listen(PORT, () => {console.log(`server  run at ${9000}`)});