const { model, Schema } = require('mongoose');

const userSchema = new Schema({
    firstname: String,
    lastname: String
});

module.exports = model('User', userSchema);
