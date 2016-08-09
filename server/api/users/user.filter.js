
exports.addUser = function (req, res, next) {
  req.checkBody('username', "user name can not be empty.").notEmpty();
  req.checkBody('emailId', "Must be a valid email address.").isEmail();
  req.checkBody('dob', "Date of birth can not be empty.").notEmpty();
  req.checkBody('role', "Enter a valid role.").isRole();
  req.checkBody('password', "6 to 20 characters required").len(8,20);
 
  checkError(req, res, next);
}

exports.updateUser = function (req, res, next) {

  req.checkParams('userId', "userId can not be empty.").notEmpty();
  req.checkBody('emailId', "Must be a valid email address.").notEmpty().isEmail();
  req.checkBody('dob', "Date of birth can not be empty.").notEmpty();
  req.checkBody('role', "Enter a valid role.").isRole();
  req.checkBody('password', "6 to 20 characters required").len(8,20);
 
  checkError(req, res, next);
}

exports.removeUser = function (req, res, next) {
  req.checkParams('userId', "userId can not be empty.").notEmpty();
  checkError(req, res, next);
}

var checkError = function (req, res, next) {
  var error = req.validationErrors();
  if (error) {
    //return the error object.
    res.json(error);
  } else {
    next();
  }
}
