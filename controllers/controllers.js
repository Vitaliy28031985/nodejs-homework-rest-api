const dataContacts = require('../models/contacts');

const getContacts = async (_, res) => {
   const contacts = await dataContacts.listContacts();
   res.status(200).json(contacts);
};

const getContactsById = async (req, res) => {
   const {contactId} = req.params;
   const contact = await dataContacts.getContactById(contactId);
   if(!contact) {
return res.status(404).json({ message: 'Not found' });  
   }
   res.status(200).json(contact);
};

const addContact = async (req, res) => {
const {body} = req;
const newContact = await dataContacts.addContact(body);
res.status(201).json(newContact);
};

const updateContact = async (req, res) => {
   const {contactId} = req.params;
   const {body} = req;
   const updateContact = await dataContacts.updateContact(contactId, body);
   if(updateContact) {
   res.status(200).json(updateContact);
} else {
   res.status(404).json({ message: 'Not found' });
}
};

const removeContact = async (req, res) => {
const {contactId} = req.params; 
const removeContact = await dataContacts.removeContact(contactId);
if(removeContact) {
res.status(200).json({ message: 'contact deleted' });   
} else {
   res.status(404).json({ message: 'Not found' });
}

};

module.exports = {
   getContacts,
   getContactsById,
   addContact,
   updateContact,
   removeContact,
};
