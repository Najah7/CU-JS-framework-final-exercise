require('dotenv').config();
const HOME = process.env.HOME_PATH

const { fetchAllUsers } = require(`${HOME}/db/users/fetch`);

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', async function(req, res, next) {
    users = await fetchAllUsers();
    res.send(users);
});

module.exports = router;
