const express = require('express')

const {addVideo, getVideos, removeVideo} = require('../../controllers/video');

const router = express.Router()

router.get('/', getVideos)

// router.get('/:contactId', async (req, res, next) => {
//   res.json({ message: 'template message' })
// })

router.post('/', addVideo)

router.delete('/:videoId', removeVideo)

// router.put('/:contactId', async (req, res, next) => {
//   res.json({ message: 'template message' })
// })

module.exports = router
