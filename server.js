const mongoose = require('mongoose')
const app = require('./app')

const DB_HOST = 'mongodb+srv://Vitaliy:0fiIQ2dV724ilLNP@cluster0.wbccrwz.mongodb.net/db-contacts';

mongoose.connect(DB_HOST)
.then(app.listen(3000, () => {
  console.log("Database connection successful")
}))
.catch(error => {
  console.log(error.message);
  process.exit(1);
})

