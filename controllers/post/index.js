const addPost = require('./addPost');
const getPosts = require('./getPost')
const updatePost = require('./updatePost')
const removePost = require('./removePost')
const getPostById = require('./getPostById')

module.exports = {
   addPost,
   getPosts,
   getPostById,
   updatePost,
   removePost
}