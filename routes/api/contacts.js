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

router.get('/:contactId', auth, ctrlWrapper(getContactsById))

router.post('/', auth, ctrlWrapper(addContact))

router.put('/:contactId', auth, ctrlWrapper(updateContact))

router.patch('/:contactId/favorite', auth, ctrlWrapper(updateStatusContact))

router.delete('/:contactId', auth, ctrlWrapper(removeContact))


module.exports = router
