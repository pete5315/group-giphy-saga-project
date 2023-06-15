// MIDDLEWARE

const express = require('express');
const pool = require('../modules/pool');
const axios = require('axios')
const router = express.Router();


// This is our router GET that pull results from the Gify API Search End Point
router.get('/',(req,res) => {
    axios.get(`http://api.giphy.com/v1/gifs/search?api_key=${}&q=${}&limit=5`)
    .then(response => {
        console.log('This is our gify search response data', response.data)
        res.send(response.data)
    }).catch(err => {
        console.log('something is wrong with our search GET', err)
    })
} )



module.exports = router