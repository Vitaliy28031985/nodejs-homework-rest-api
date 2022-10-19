const {Post} = require('../../models/post')

const updatePost = async (req, res) => {
   // const { _id } = req.user;
   const {postId} = req.params;
   const {body} = req;
   const updatePost = await Post.findByIdAndUpdate(postId, body, {new: true});
   if(updatePost) {
   res.status(200).json(updatePost);
} else {
   res.status(404).json({ message: 'Not found' });
}
};

module.exports = updatePost;