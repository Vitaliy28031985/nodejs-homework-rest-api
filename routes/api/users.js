const express = require('express')

const {register, getCurrent, login, logout} = require('../../controllers/user')
const {ctrlWrapper, auth} = require('../../middlewares');
// const {userRegisterSchema, userLoginSchema} = require('../../models/user')


const router = express.Router()

router.get("/current", auth, ctrlWrapper(getCurrent))

router.post('/register', ctrlWrapper(register))

router.post('/login', ctrlWrapper(login))

router.post('/logout', auth, ctrlWrapper(logout))

module.exports = router;

