const mongoose = require('mongoose');

var busSchema = mongoose.Schema({
    from: {type:String, required: true},
    to: {type:String, required: true},
    type: {type:String, required: true},
    date: {type:String, required: true},
    available: {type:String, required: true},
    fare: {type:Number, required: true},
    tax: {type:Number, required: true},
    bookedSeats: {type:[Number], required: true}
})

module.exports = mongoose.model('Bus', busSchema)