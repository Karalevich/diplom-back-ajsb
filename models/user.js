const { Schema, model } = require('mongoose')
const user = new Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    avatarURL: {
        type: String
    },
})


module.exports = model('User', user);
