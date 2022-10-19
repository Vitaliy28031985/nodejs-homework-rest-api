const {Post} = require('../../models/post')

const  addPost = async (req, res) => {
const {body} = req;
const newPost = await Post.create(body);
res.status(200).json(newPost);

}

module.exports = addPost;