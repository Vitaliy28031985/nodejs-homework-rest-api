const express = require('express')

const {addVideo, getVideos, removeVideo} = require('../../controllers/video');
const {ctrlWrapper, auth} = require('../../middlewares')

const router = express.Router()

router.get('/', auth, ctrlWrapper(getVideos))

router.post('/', auth, ctrlWrapper(addVideo))

router.delete('/:videoId', auth, ctrlWrapper(removeVideo))


module.exports = router
