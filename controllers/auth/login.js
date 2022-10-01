const {Unauthorized} = require('http-errors')
const {User} = require('../../models/user')


const login = async (req, res) => {
   const {password, email} = req.body;

const user = await User.findOne({email});

if(!user || !user.coparePassword(password)) {
   throw new Unauthorized("Email or password is wrong")
}


};

module.exports = {
   login,
};