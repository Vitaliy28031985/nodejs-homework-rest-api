const express = require('express');
const { required } = require('joi');

const {
  getContacts,
   getContactsById,
   addContact,
   updateContact,
   removeContact,
   updateStatusContact,
} = require('../../controllers/controllers');

const {
  contactValidation,
  favoriteValidation,
} = require('../../models/contact');

const router = express.Router()

router.get('/', getContacts)

router.get('/:contactId', getContactsById)

router.post('/', contactValidation, addContact)

router.delete('/:contactId', removeContact)

router.put('/:contactId', contactValidation, updateContact)

router.patch('/:contactId/favorite', favoriteValidation, updateStatusContact)

module.exports = router


