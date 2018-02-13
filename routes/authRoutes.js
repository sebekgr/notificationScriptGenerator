const passport = require('passport');


//auth get current user data
module.exports = app => {
    app.get('/auth/current_user', (req, res) => {
        if(!req.user) res.send('').status(401);
        else res.send(req.user).status(200);
    });

    //auth logout
    app.get('/auth/logout', (req, res) => {
        //handle with passport
        req.logout();
        req.session = null;
        res.redirect('/');
    });

    //auth with google
    app.get('/auth/google', passport.authenticate('google', {
        scope: ['profile'],
        //prompt: 'select_account'
    }));

    //callback route for google redirect after sucessful login in
    app.get('/auth/google/redirect', passport.authenticate('google'), (req, res) => {
        res.redirect('/profile');
    });
};
