const {Contact} = require('../../models/contact');

const updateContact = async (req, res) => {
   const {contactId} = req.params;
   const {body} = req;
   const updateContact = await Contact.findByIdAndUpdate(contactId, body, {new: true});
   if(updateContact) {
   res.status(200).json(updateContact);
} else {
   res.status(404).json({ message: 'Not found' });
}
};

module.exports = updateContact;