const express = require('express')

const {register, login} = require('../../controllers/auth')
const {ctrlWrapper} = require('../../helpers');


const router = express.Router()

router.post('/register', ctrlWrapper(register))

router.post('/login', ctrlWrapper(login))

router.post('/logout')

module.exports = router;