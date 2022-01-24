require('dotenv').config()
const express = require('express')
const app = express()
const port = 3001
const {requireUser, optionalUser} = require("./propelauth");

app.get('/whoami', requireUser, (req, res) => {
    res.json({userId: req.user.userId})
})

app.get('/whoami_optional', optionalUser, (req, res) => {
    if (req.user) {
        res.json({userId: req.user.userId})
    } else {
        res.json({userId: null})
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
