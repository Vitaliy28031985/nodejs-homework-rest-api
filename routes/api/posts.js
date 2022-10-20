const express = require('express')

const {ctrlWrapper, auth} = require('../../middlewares')
const {
addPost,
getPostById,
getPosts,
updatePost,
removePost} = require('../../controllers/post')

const router = express.Router()

router.get('/',  auth, ctrlWrapper(getPosts))

router.get('/:postId', auth, ctrlWrapper(getPostById))

router.post('/', auth, ctrlWrapper(addPost))

router.put('/:postId', auth, ctrlWrapper(updatePost))

router.delete('/:postId', auth, ctrlWrapper(removePost))

module.exports = router