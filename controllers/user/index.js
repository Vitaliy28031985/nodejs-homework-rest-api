const register = require('./register')
const getCurrent = require('./getCurrent')
const login = require('./login')
const logout = require('./logout')
const verifyEmail = require('./verifyEmail')
const resendEmail = require('./resendEmail')


module.exports = {
   register,
   getCurrent,
   login,
   logout,
   verifyEmail,
   resendEmail
}