const express = require('express')

const {register, login, logout} = require('../../controllers/auth')
const {ctrlWrapper} = require('../../helpers');
const {getCurrent} = require('../../controllers/user');
const {auth} = require('../../middlewares')
const {userRegisterLoginSchema} = require('../../models/user')


const router = express.Router()

router.get("/current", auth, ctrlWrapper(getCurrent))

router.post('/register', userRegisterLoginSchema, ctrlWrapper(register))

router.post('/login', userRegisterLoginSchema, ctrlWrapper(login))

router.post('/logout', auth, ctrlWrapper(logout))

module.exports = router;