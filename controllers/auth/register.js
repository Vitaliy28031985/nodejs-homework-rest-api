const {Conflict} = require('http-errors')
const {User} = require('../../models/user')

const register = async(req, res) => {
const {password, email, subscription} = req.body;

const user = await User.findOne({email});
if(user) {
throw new Conflict("Email in use")
}

const newUser = new User({email, subscription});
newUser.setPassword(password);
newUser.save();

res.status(201).json({
   status: "success",
   code: 201,
   data: {
      subscription,
      email
   }

})
}

module.exports = register;