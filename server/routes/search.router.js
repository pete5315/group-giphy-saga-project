// MIDDLEWARE

const express = require('express');
const pool = require('../modules/pool');
const axios = require('axios')
const router = express.Router();
// sourced in .env to protect API KEY
require('dotenv').config();


// This is our router GET that pull results from the Gify API Search End Point
router.get('/:query',(req,res) => {
    console.log('req.params.query =>',req.params.query);
    axios.get(`http://api.giphy.com/v1/gifs/search?api_key=h0SjQLzuq0GJ3rzRXmY2kta8uv4x1nXR&q=${req.params.query}&limit=5`)
    .then(response => {
        console.log('This is our gify search response data', response.data)
        res.send(response.data)
    }).catch(err => {
        console.log('something is wrong with our search GET', err)
    })
} )



module.exports = router