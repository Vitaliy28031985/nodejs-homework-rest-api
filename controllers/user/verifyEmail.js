const {User} = require('../../models/user');


const verifyEmail = async (req, res) => {
const {verificationToken} = req.params;
// const [verificationToken] = req.params.split(" ");
await console.log(verificationToken);
const user = await User.findOne({verificationToken});
if(!user) {
   return res.status(400).json({ message: 'Verification has already been passed' });
}
await User.findByIdAndUpdate(user._id, {verify: true, verificationToken: null});

res.status(200).json({
   message: "Verification email sent"
})
}

module.exports = verifyEmail;