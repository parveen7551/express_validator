1) Installation 
   npm install express-validator
2)Usage
    //Requiring the package.
   var validator = require('express-validator');
      
   app.use(validator([options])); // this line must be immediately after express.bodyParser()!
   //In options we can add our custom validators as well.
   

3)
  Validate the params and body params with options :	
 
  req.checkParams('userId', "userId can not be empty.").notEmpty();
  req.checkBody('emailId', "Must be a valid email address.").notEmpty().isEmail();
 
 If there is a validation error in the params then return the error otherwise proceed to handle the request.
 var error = req.validationErrors();
  if (error) {
    //return the error object.
    res.json(error);
  } else {
    next();
  }
