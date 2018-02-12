const router = require('express').Router();


const isLogged = (req,res, next) => {
    if(!req.user) {
        return res.redirect('/auth/google');
    }
    next();
}

router.get('/', isLogged,  (req, res) => {
    res.redirect('/');
});



module.exports = router;