const express = require('express')

const {
  getContacts,
   getContactsById,
   addContact,
   updateContact,
   removeContact,
} = require('../../controllers/controllers');

const router = express.Router()



router.get('/', getContacts)

router.get('/:contactId', getContactsById)

router.post('/', addContact)

router.delete('/:contactId', removeContact)

router.put('/:contactId', updateContact)

module.exports = router
