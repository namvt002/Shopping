const mongoose = require('mongoose');

const schema = mongoose.Schema;

const user = new schema({
    username: {type: String, maxLength: 64},
    password: {type: String, maxLength:128},
    avatar: {type: String, maxLength:255},
    gender: {type: String, maxLength: 8 },
});

module.exports = mongoose.model('User', user, 'User');
