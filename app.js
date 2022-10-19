const express = require('express')
const logger = require('morgan')
const cors = require('cors')
require('dotenv').config();

const usersRouter = require('./routes/api/users')
const videosRouter = require('./routes/api/videos')
const postsRouter = require('./routes/api/posts')

const app = express()

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short'

app.use(logger(formatsLogger))
app.use(cors())
app.use(express.json())

app.use('/api/users', usersRouter)
app.use('/api/posts', postsRouter)
app.use('/api/videos', videosRouter)

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' })
})

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message })
})

module.exports = app
