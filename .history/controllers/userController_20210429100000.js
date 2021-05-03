
const User = require("../models/usersModel");


// get all contact
exports.getClient = async (req, res) => {
    try {
      const client = await Client.find();
      res.json(client);
    } catch (error) {
      res.status(400).json({ massage: error.message });
    }
  };

// Post  Users to mongodb
exports.addUser = async (req, res) => {
    const user = new User({
      // créer des nouveaux clients
  
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
      date: req.body.date
    });
    try {
      const newUser = await user.save();
      res.status(201).json(newUser);
    } catch (error) {
      res.status(400).json({ massage: error.message });
    }
};

