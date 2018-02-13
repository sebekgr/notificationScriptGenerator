const router = require('express').Router();

router.get('/', (req, res, next) => {
    res.redirect('/');
    next();
});

module.exports = router;