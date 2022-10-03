const {Contact} = require('../../models/contact')

const getContacts = async (_, res) => {
   const {_id} = req.user;
   const contacts = await Contact.find({owner: _id}).populate("owner", "_id email");
   res.status(200).json(contacts);
};

module.exports = getContacts;