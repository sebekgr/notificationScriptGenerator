const router = require('express').Router();
const passport = require('passport');


//auth get current user data
router.get('/current_user', (req, res) => {
    if(!req.user) return res.send('');
    res.send(req.user);
});

//auth logout
router.get('/logout', (req, res) => {
    //handle with passport
    req.logout();
    req.session = null;
    res.redirect('/');
});

//auth with google
router.get('/google', passport.authenticate('google', {
    scope: ['profile'],
    //prompt: 'select_account'
}));

//callback route for google redirect after sucessful login in
router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
    res.redirect('/profile');
});

module.exports = router;