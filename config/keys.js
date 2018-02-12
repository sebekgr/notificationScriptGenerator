//figure out what set of credentials to return

if(process.env.NODE_ENV === 'production') {
	module.exports = require('./key_prod');
} else {
	module.exports = require('./key_dev');
}