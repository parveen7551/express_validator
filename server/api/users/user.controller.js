'use strict';

 exports.updateUser = function (req, res) {
  var payload = req.body;
  var userId = req.params.id;
  console.log(userId);
  res.json(payload);
};



exports.createUser = function (req, res) {
  var payload = req.body;
  console.log(payload);
  res.json(payload);
};

exports.removeUser = function (req, res) {
  var userId = req.params.userId;
  console.log(userId);
  res.json(userId);
};
