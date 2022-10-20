const {User} = require('../../models/user');
const {sendEmail} = require('../../helpers');

const {BASIC_URL} = process.env;

const resendEmail = async (req, res) => {

const {email} = req.body;

const user = await User.findOne({email});


if(!user) {
return res.status(404).json({ message: 'User not found' });
}

if(user.verify) {
   return res.status(400).json({ message: 'Verification has already been passed' });   
}

const mail = {
   to: email,
   subject: "Confirmation email",
   html: `<a target="_blank" href="${BASIC_URL}/api/users/verify/${user.verificationToken}">Confirm email repeatedly</a>`
   };
   
   await sendEmail(mail);

   res.status(200).json({
      message: 'Verification email sent',
    });
}

module.exports = resendEmail;