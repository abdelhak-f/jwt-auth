
const user = require("../models/usersModel");
// Post te client to mongodb
exports.adduser = async (req, res) => {
    const user = new user({
      // créer des nouveaux clients
  
      firstName: req.body.firstName,
      lastName: req.body.lastName,
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


//    module.exports = user;