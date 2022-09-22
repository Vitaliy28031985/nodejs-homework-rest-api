
const fs = require('fs/promises');
const path = require('path');
const contactsPatch = path.join(__dirname, '../models/contacts.json');

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

 module.exports = {
   readContacts,
   writeContacts,
 }