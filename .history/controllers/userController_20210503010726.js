
const User = require("../models/usersModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");
// const keys = require("dotenv").config({ path: "./config/.env" });
// const passport = require("passport");
//require the roles users
// const { roles } = require('../roles')
// Load input validation
const validateRegisterInput = require("../validation/register");
const validateLoginInput = require("../validation/login");


exports.register = ( (req, res) => {
  // Form validation

  const { errors, isValid } = validateRegisterInput(req.body);

  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(400).json({ email: "Email already exists" });
    } else {
      const newUser = new User({
        // add every thing in body
        ...req.body
      });

      // Hash password before saving in database
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });
});

exports.login = ( (req, res) => {
  // Form validation

  const { errors, isValid } = validateLoginInput(req.body);

  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  // Find user by email
  User.findOne({ email }).then(user => {
    // Check if user exists
    if (!user) {
      return res.status(404).json({ emailnotfound: "Email not found" });
    }

    // Check password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // User matched
        // Create JWT Payload
        const payload = {
          id: user.id,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          date: user.date,
          role: user.role
        };
        
        // Sign token
        jwt.sign(
          payload,
          keys.secretOrKey,
          {
            expiresIn: 31556926 // 1 year in seconds
          },
          (err, token) => {
            res.json({
              success: true,
              token: token
            });
          }
        );
        
          // if(req.users.role==='admin'){
          //     res.redirect('/admin');
          // }
          // else if(req.users.role==='technicien'){
          //     res.redirect('/technicien');
          // }
          // else{
          //     res.redirect('/normalUser');
          // }
      

      } 
      if(req.users.role==='admin'){
        res.redirect('/admin');
    }
    else if(req.users.role==='technicien'){
        res.redirect('/technicien');
    }
    else{
        res.redirect('/normalUser');
    }
    else{
      return res
        .status(400)
        .json({ passwordincorrect: "Password incorrect" });
    }
      
    });
  });
});

// exports.route("/login").get(function(req, res) {
//   user.find({}, function(err, result) {
//     if (err) {
//       res.send(err);
//     } else {
//       res.send(result);
//     }
//   });
// });
// Bearer

// module.exports = router;


