const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const busRoutes = require('./routes/buses');
// const authRoutes = require('./routes/auths');
const signupRoutes = require('./routes/signups');
const mongoUrl = "mongodb://127.0.0.1:27017/busapp"
const cors = require('cors')
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("DB Connected"))
    .catch((err) => console.log("Error in DB Connection" + err))

app.use(cors())
app.use(bodyParser.json());


app.use('/signup', signupRoutes);
// app.use('/auth', authRoutes);
app.use('/bus', busRoutes)

module.exports = app;