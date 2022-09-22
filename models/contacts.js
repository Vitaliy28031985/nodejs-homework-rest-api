
const { randomUUID } = require('crypto');

const auxiliaryFunctions = require('../helpers/auxiliaryFunctions');

const listContacts = async () => {

try {
const contacts = await auxiliaryFunctions.readContacts();
if(!contacts) {
  throw new Error('No contacts to display.');
}
return contacts;
} catch (e) {
  console.error('Read list contacts error:', e.message);
}
}

const getContactById = async (contactId) => {
  try {
    const contacts = await auxiliaryFunctions.readContacts();
    const contact = contacts.find(({id}) => id === contactId);
    return contact;
  } catch (e) {
    console.error(`Read contact by ID=${contactId} error:`, e.message);
  }
}

const removeContact = async (contactId) => {
try {
  const contacts = await auxiliaryFunctions.readContacts();
  const contactDelete = contacts.findIndex(({id}) => id === contactId);
if(contactDelete === -1) {
  return false;
}
contacts.splice(contactDelete, 1);
await auxiliaryFunctions.writeContacts(contacts);
return true;

} catch (e) {
  console.error('Delete contact by ID error:', e.message);
}
}

const addContact = async (body) => {
  try {
   const newContact = {
      id: randomUUID(),
      ...body,
    };
    const contacts = await auxiliaryFunctions.readContacts();
 contacts.push(newContact);
 await auxiliaryFunctions.writeContacts(contacts);
 return newContact; 

  } catch (e) {
    console.error('Unable to add contact. Error:', e.message);
  }
}

const updateContact = async (contactId, body) => {
  try {
    const contacts = await auxiliaryFunctions.readContacts();
    const contact = contacts.find(({id}) => id === contactId);
    if(!contact) {
      return null;
    }
    Object.assign(contact, body);
    await auxiliaryFunctions.writeContacts(contacts);
    return contact;
  } catch (e) {
    console.error('Unable to update contact. Error:', e.message); 
  }
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
}