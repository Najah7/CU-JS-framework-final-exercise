require('dotenv').config();
const HOME = process.env.HOME_PATH

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(`${HOME}/views/table.html`);
});


module.exports = router;
