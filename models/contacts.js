const fs = require('fs/promises');
const path = require('path');
const { randomUUID } = require('crypto');

const contactsPatch = path.join(__dirname, './contacts.json');


//Auxiliary functions



async function readContacts() {
  try {
const contactsContent = await fs.readFile(contactsPatch, { encoding: 'utf8' });
return JSON.parse(contactsContent);
  } catch (e) {
    console.error('Read error:', e.message);
  }
 
};



async function writeContacts(dataWrite) {
  try {
   const text = JSON.stringify(dataWrite);
   await fs.writeFile(contactsPatch, text); 
  }
  catch (e) {
    console.error('Write error:', e.message); 
  }
}



//Basic functions

const listContacts = async () => {

try {
const contacts = await readContacts();
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
    const contacts = await readContacts();
    const contact = contacts.find(({id}) => id === contactId);
    return contact;
  } catch (e) {
    console.error(`Read contact by ID=${contactId} error:`, e.message);
  }
}

const removeContact = async (contactId) => {
try {
  const contacts = await readContacts();
  const contactDelete = contacts.findIndex(({id}) => id === contactId);
if(contactDelete === -1) {
  return false;
}
contacts.splice(contactDelete, 1);
await writeContacts(contacts);
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
    const contacts = await readContacts();
 contacts.push(newContact);
 await writeContacts(contacts);
 return newContact; 

  } catch (e) {
    console.error('Unable to add contact. Error:', e.message);
  }
}

const updateContact = async (contactId, body) => {
  try {
    const contacts = await readContacts();
    const contact = contacts.find(({id}) => id === contactId);
    if(!contact) {
      return null;
    }
    Object.assign(contact, body);
    await writeContacts(contacts);
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

