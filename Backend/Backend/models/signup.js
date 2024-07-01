const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

var userSchema = mongoose.Schema({
    email: {type:String, required: true, unique: true},
    pass: {type:String, required: true},
    name: {type:String, required: true},
    gender: {type:String, required: true},
    phone: {type:String, required: true},
   
})

userSchema.plugin(uniqueValidator, {message: 'This Email is already exists'});
module.exports = mongoose.model('User', userSchema)