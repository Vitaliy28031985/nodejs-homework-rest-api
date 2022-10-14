const gravatar = require('gravatar');
const {v4: uuidv4} = require("uuid");


const {User} = require('../../models/user');
const {sendEmail} = require('../../helpers');

const register = async(req, res) => {
const {password, email, subscription} = req.body;

const user = await User.findOne({email});
if(user) {
return res.status(409).json({ message: 'Email in use' }); 
}

const verificationToken = uuidv4();

const avatarURL = gravatar.url(email);
const newUser = new User({email, subscription, avatarURL, verificationToken});
newUser.setPassword(password);
await newUser.save();

const mail = {
to: email,
subject: "Confirmation email",
html: `<a target="_blank" href="http://localhost:3000/api/users/verify/${verificationToken}">Confirm email</a>`
};

await sendEmail(mail);

res.status(201).json({
   status: "success",
   code: 201,
   data: {
      email,
      subscription: "starter",
      avatarURL,
      verificationToken,
      
   }

})
}

module.exports = register;