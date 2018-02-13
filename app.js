const express = require('express');
const app = express();
const passportSetup = require('./config/passportSetup');
const mongoose = require('mongoose');
const key = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 9000;

//connect with db
mongoose.connect(key.mongoDB, () => { console.log('connected to mongoDB')});


//body parser for json data
app.use(bodyParser.json());

//cookie
app.use(cookieSession({
    maxAge: 24 * 60 * 60* 1000,
    keys: [key.cookie],
    cookie: {  httpOnly: true,  secure: true  } 
}));

//init passport
app.use(passport.initialize());
app.use(passport.session());

//set up routes
require('./routes/authRoutes')(app);


//set up routes for production. Serving client side assets
if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    const path = require('path');

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

app.listen(PORT, () => {console.log(`server  run at ${9000}`)});