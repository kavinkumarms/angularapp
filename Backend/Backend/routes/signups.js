const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/signup');
const router = express.Router();

router.post('/signup', (req, res, next) => {
    bcrypt.hash(req.body.pass, 10)
        .then(hashPass => {
            const user = new User({
                name: req.body.name,
                phone: req.body.phone,
                gender: req.body.gender,
                email: req.body.email,
                pass: hashPass
            });
            user.save()
                .then(result => {
                    console.log(result)
                    res.status(201).json({
                     message: 'Account Created',
                    })
                })
                .catch(err => {
                  console.log(err)
                    res.status(500).json({
                        message: 'error'
                    })
                })
        })
       
})

router.post('/login', (req, res, next) => {
    User.findOne({ email: req.body.email })
        .then(user => {
            if (!user) {
                return res.status(401).json({
                    message: "User Not Found"
                })
            }
            bcrypt.compare(req.body.pass, user.pass)
                .then(compareRes => {
                    if (!compareRes) {
                        return res.status(401).json({
                            message: "Login Failed"
                        })
                    }
                    var token = jwt.sign(
                        {
                            email: user.email,
                            id: user._id
                        },
                        'this-is-my-new-passcode',
                        {
                            expiresIn: '1h'
                        });
                    res.status(200).json({
                        message: 'Login Successfull',
                        token: token,
                        expiresIn:3600                     
                    })
                })
                .catch(err => {
                    console.log(err)
                    res.status(401).json({
                        message: "Login Failed"
                    })
                })
        })      
})


module.exports = router;