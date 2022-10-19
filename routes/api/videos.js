const express = require('express')

const {addVideo, getVideos, removeVideo} = require('../../controllers/video');
const {ctrlWrapper} = require('../../middlewares')

const router = express.Router()

router.get('/', ctrlWrapper(getVideos))

router.post('/', ctrlWrapper(addVideo))

router.delete('/:videoId', ctrlWrapper(removeVideo))

// router.put('/:contactId', async (req, res, next) => {
//   res.json({ message: 'template message' })
// })

module.exports = router
