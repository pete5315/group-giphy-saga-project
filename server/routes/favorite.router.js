const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return all favorite images
router.get('/', (req, res) => {
  const queryText = 'SELECT * FROM favorites ORDER BY id ASC';

  pool.query(queryText)
    .then(result=>{
      res.send(result.rows);
      console.log('GET WORKS!!!');
    }).catch(error=>{
      console.log('problems in the GET', error);
      res.sendStatus(500)
    })
});

// add a new favorite
router.post('/', (req, res) => {
  const queryText = `INSERT INTO favorites (name, fav_type, url, rating, category_ID)
                     VALUES ($1, $2, $3, $4, $5)`;
  console.log('REQ.BODY!!!!!',req.body);
  pool.query(queryText, [req.body.name, req.body.fav_type, req.body.url, req.body.rating, req.body.category_id])
    .then(result=>{
      console.log('THE POST WORKS!!');
      res.sendStatus(200);
    }).catch(error=>{
      console.log('problems in the favList POST=>',error);
      res.sendStatus(500);
    })

});

// update given favorite with a category id
router.put('/:favId', (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  res.sendStatus(200);
});

// delete a favorite
router.delete('/', (req, res) => {
  res.sendStatus(200);
});

module.exports = router;

router.get('/', (req, res) => {
  // return all categories
  const queryText = `SELECT * FROM category ORDER BY name ASC`;
  pool
    .query(queryText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(`Error on query ${error}`);
      res.sendStatus(500);
    });
});
