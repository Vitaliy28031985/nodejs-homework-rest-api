const express = require('express')

const {ctrlWrapper} = require('../../helpers');
const {auth} = require('../../middlewares')
const {
  getContacts,
  getContactsById,
  addContact,
  updateContact,
  updateStatusContact,
  removeContact} = require('../../controllers/contacts')

const router = express.Router()

router.get('/', auth, ctrlWrapper(getContacts))

router.get('/:contactId', ctrlWrapper(getContactsById))

router.post('/', auth, ctrlWrapper(addContact))

router.put('/:contactId', ctrlWrapper(updateContact))

router.patch('/:contactId/favorite', ctrlWrapper(updateStatusContact))

router.delete('/:contactId', ctrlWrapper(removeContact))


module.exports = router
