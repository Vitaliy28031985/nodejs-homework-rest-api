const {Contact} = require('../../models/contact');

const addContact = async (req, res) => {
   const {body} = req;
   const newContact = await Contact.create(body);
   res.status(201).json(newContact);
   };

   module.exports = addContact;