const express = require('express');

const {contactValidation} = require('../../validation/validationContact');

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

router.post('/', contactValidation, addContact)

router.delete('/:contactId', removeContact)

router.put('/:contactId', contactValidation, updateContact)

module.exports = router
