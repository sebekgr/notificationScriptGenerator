const mongoose = require('mongoose');
const {Schema} = mongoose;


const userSchema = new Schema({
    username: String,
    googleId: String,
    host: {type: String, default: "http://localhost/"},
    script: {type: String, default: ""},
    avatar: String

});

const User = module.exports = mongoose.model('users', userSchema);


