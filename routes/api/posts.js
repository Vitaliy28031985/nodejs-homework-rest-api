const express = require('express')

const {ctrlWrapper} = require('../../middlewares')
const {
addPost,
getPosts,
updatePost,
removePost} = require('../../controllers/post')

const router = express.Router()

router.get('/', ctrlWrapper(getPosts))

router.post('/', ctrlWrapper(addPost))

router.put('/:postId', ctrlWrapper(updatePost))

router.delete('/:postId', ctrlWrapper(removePost))

module.exports = router