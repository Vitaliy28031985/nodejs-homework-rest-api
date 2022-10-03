const express = require('express')

const {register, login} = require('../../controllers/auth')
const {ctrlWrapper} = require('../../helpers');
const {getCurrent} = require('../../controllers/user');
const {auth} = require('../../middlewares')


const router = express.Router()

router.get("/current", auth, ctrlWrapper(getCurrent))

router.post('/register', ctrlWrapper(register))

router.post('/login', ctrlWrapper(login))

router.post('/logout')

module.exports = router;