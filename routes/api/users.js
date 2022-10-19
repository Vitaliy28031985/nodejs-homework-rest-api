const express = require('express')

const {register, getCurrent, login, logout, verifyEmail, resendEmail} = require('../../controllers/user')
const {ctrlWrapper, auth} = require('../../middlewares');
const {resendEmailSchema} = require('../../models/user')


const router = express.Router()

router.post("/verify", resendEmailSchema, ctrlWrapper(resendEmail))

router.get("/verify/:verificationToken", ctrlWrapper(verifyEmail))

router.get("/current", auth, ctrlWrapper(getCurrent))

router.post('/register', ctrlWrapper(register))

router.post('/login', ctrlWrapper(login))

router.post('/logout', auth, ctrlWrapper(logout))

module.exports = router;

