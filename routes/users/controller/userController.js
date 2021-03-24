const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require("../Model/User");

module.exports = {
    signUp: async (req, res) => {
        try {
    
          let salted = await bcrypt.genSalt(10);
          let hashedPassword = await bcrypt.hash(req.body.password, salted)
    
          let createdUser = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: hashedPassword,
          });
    
          let savedUser = await createdUser.save();
    
          res.json({
            data: savedUser,
          });
        } catch (e) {
          console.log(e.message);
          res.status(500).json(mongoDBErrorHelper(e));
          // res.status(500).json({
          //   message: e.message,
          // });
        }
      },
}