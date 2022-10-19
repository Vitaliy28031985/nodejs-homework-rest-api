const {User} = require('../../models/user')

const register = async(req, res) => {
const {email, name, password } = req.body;

const user = await User.findOne({email});
if(user) {
return res.status(409).json({ message: 'Email in use' }); 
}

const newUser = new User({name, email});
newUser.setPassword(password);
newUser.save();

res.status(201).json({
   status: "success",
   code: 201,
   data: {
      name,
      email,  
   }

})
}

module.exports = register;