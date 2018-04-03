const express = require('express');
const app = express();
const passportSetup = require('./config/passportSetup');
const mongoose = require('mongoose');
const key = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 9000;
const path = require('path');

//static files
app.use('/files', express.static('files'));

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

app.use((req,res,next) => {
    res.set({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization'
    })
    next();
})

//set up routes
require('./routes/authRoutes')(app);
require('./routes/scriptRoutes')(app);//route for generating script

//set up routes for production. Serving client side assets
if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

app.listen(PORT, () => {console.log(`server  run at ${9000}`)});