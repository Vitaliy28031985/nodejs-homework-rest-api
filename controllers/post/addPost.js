const {Post} = require('../../models/post')

const  addPost = async (req, res) => {
const {_id} = req.user;
const {body} = req;
const newPost = await Post.create({...body, owner: _id});
res.status(201).json(newPost);

}

module.exports = addPost;