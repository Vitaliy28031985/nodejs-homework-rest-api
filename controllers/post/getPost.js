const {Post} = require('../../models/post')

const getPosts = async (req, res) => {
   // const { _id } = req.user;
   const post = await Post.find({});
   res.status(200).json(post);
};

module.exports = getPosts;