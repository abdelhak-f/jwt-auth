const Client = require("../models/Client.model");
// Post te client to mongodb
exports.postClient = async (req, res) => {
    const user = new Client({
      // créer des nouveaux clients
  
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
      joinedDate: req.body.joinedDate,
    });
    try {
      const newClient = await client.save();
      res.status(201).json(newClient);
    } catch (error) {
      res.status(400).json({ massage: error.message });
    }
  };
