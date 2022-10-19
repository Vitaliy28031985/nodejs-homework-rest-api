const {v4: uuidv4} = require("uuid");
const {User} = require('../../models/user')
const {sendEmail} = require('../../helpers');

const register = async(req, res) => {
const {email, name, password } = req.body;

const user = await User.findOne({email});
if(user) {
return res.status(409).json({ message: 'Email in use' }); 
}

const verificationToken = uuidv4();

const newUser = new User({name, email, verificationToken});
newUser.setPassword(password);
await newUser.save();

const mail = {
to: email,
subject: "Confirmation email",
html: `<a target="_blank" href="http://localhost:8080/api/users/verify/${verificationToken}">Confirm email</a>`
};

await sendEmail(mail);


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