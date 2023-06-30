var express = require('express');
var router = express.Router();

const ROOT_URL = 'https://api.chucknorris.io/jokes/';
/* GET home page. */
router.get('/', function(req, res) {
  const category = req.query.category;
  fetch(`${ROOT_URL}/categories`)
  .then(res => res.json())
  .then(categories => {
    if(category) {
      fetch(`${ROOT_URL}/random?category=${category}`)
        .then(res => res.json())
        .then(joke => {
          res.render('index', {categories, category: req.query.category, joke: joke.value});
        });
    } else {
      res.render('index', {categories, category: null, joke: null});
    }
  })
});

module.exports = router;