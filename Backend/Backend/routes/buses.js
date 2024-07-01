const express = require('express');
const Bus = require('../models/bus');
const router = express.Router();

router.get('/getbus', (req, res, next)=> {
    console.log(req.query);
    Bus.find({from: req.query.from, to: req.query.to, date: req.query.date})
    .then(result=> {
        res.status(200).json({
            message: 'Buses geted',
            buses: result
        });
    })
    .catch(err=> {
        res.status(500).json({
            message: 'Unable to find'
        });
    });
});

router.post('/book', (req, res, next)=> {
    console.log(req.body. selectedSeat);
    Bus.findByIdAndUpdate({_id: req.body.id}, {$push: {bookedSeats: {$each: req.body. selectedSeat}}})
    .then(result=> {
        res.status(201).json({
            message: 'Seats Booked'
        });
    })
    .catch(err=> {
        console.log(err);
        res.status(500).json({
            message: 'Error in  Booking'
        });
    });
});

module.exports = router;