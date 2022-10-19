
const getCurrent = async(req, res) => {
const {email, name} = req.user;

if(!email) {
   return res.status(401).json({ message: 'Not authorized' });
}

res.json({
   status: "succces",
   code: 200,
   data: {
      user: {
         name,
         email,
      }
   }
})
}



module.exports = getCurrent;