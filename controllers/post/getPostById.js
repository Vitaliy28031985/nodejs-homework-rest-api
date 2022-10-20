const {Post} = require('../../models/post')

const getPostById = async (req, res) => {
   const { _id } = req.user;
   const {postId} = req.params;
   const post = await Post.findById({ owner: _id, _id: postId },
      '-createdAt -updatedAt');
   if(!post) {
return res.status(404).json({ message: 'Not found' });  
   }
   res.status(200).json(post);
};

module.exports = getPostById ;