const express = require('express')

const {register, login, logout} = require('../../controllers/auth')
const {ctrlWrapper} = require('../../helpers');
const {getCurrent, updateAvatar, verifyEmail, resendEmail} = require('../../controllers/user');
const {auth, upload} = require('../../middlewares')
const {userRegisterSchema, userLoginSchema, resendEmailSchema} = require('../../models/user')


const router = express.Router()

router.post("/verify", resendEmailSchema, ctrlWrapper(resendEmail))

router.get("/verify/:verificationToken", ctrlWrapper(verifyEmail))

router.get("/current", auth, ctrlWrapper(getCurrent))

router.patch("/avatars", auth, upload.single("avatar"), ctrlWrapper(updateAvatar))

router.post('/register', userRegisterSchema, ctrlWrapper(register))

router.post('/login', userLoginSchema, ctrlWrapper(login))

router.post('/logout', auth, ctrlWrapper(logout))

module.exports = router;