const mongoose = require('mongoose')
const app = require('./app')

const {DB_HOST, PORT} = process.env;

mongoose.connect(DB_HOST)
.then(app.listen(PORT || 8080, () => {
  console.log("Server running. Use our API on port: 8080")
}))
.catch(error => {
  console.log(error.message);
  process.exit(1);
})

// cross-env NODE_ENV=production node ./server.js
