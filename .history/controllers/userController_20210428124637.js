const User = require("../models/usersModel");
// Post te client to mongodb
exports.addUser = async (req, res) => {
    const user = new user({
      // créer des nouveaux clients
  
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      password: req.body.password,
      joinedDate: req.body.joinedDate,
    });
    try {
      const newUser = await user.save();
      res.status(201).json(newUser);
    } catch (error) {
      res.status(400).json({ massage: error.message });
    }
  };
