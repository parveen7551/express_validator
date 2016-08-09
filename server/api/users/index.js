
var express = require('express');
var controller = require('./user.controller');
var filter = require('./user.filter');

var router = express.Router();



router.post('/', filter.addUser, controller.createUser);


router.delete('/:userId', filter.removeUser, controller.removeUser);


router.put('/:userId', filter.updateUser, controller.updateUser);

module.exports = router;
