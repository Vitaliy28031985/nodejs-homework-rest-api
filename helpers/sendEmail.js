/* eslint-disable no-useless-catch */

const sgMail = require('@sendgrid/mail');

const {SWNDGRID_API_KEY} = process.env;

sgMail.setApiKey(SWNDGRID_API_KEY);

const sendEmail = async (data) => {
const email = {...data, from: 'vitaliy1540@ukr.net'};
try {
   await sgMail.send(email)

} catch (error) {
   throw error;
}
}

module.exports = sendEmail;