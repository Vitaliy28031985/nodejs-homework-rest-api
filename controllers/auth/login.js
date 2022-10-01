const {Unauthorized} = require('http-errors')
const jwt = require('jsonwebtoken');
const {User} = require('../../models/user')

const {SECRET_KEY} = process.env;

const login = async (req, res) => {

const {password, email} = req.body;

const user = await User.findOne({email});

if(!user || !user.coparePassword(password)) {
   throw new Unauthorized("Email or password is wrong")
}

const payload = {
   id: user._id,
};

const token = jwt.sign(payload, SECRET_KEY, {expiresIn: "1h"});

res.json({
   status: "success",
   code: 200,
   data: {
      token
   }
})

};


module.exports = login;