const {Post} = require('../../models/post')

const removePost = async (req, res) => {
   const {postId} = req.params; 
   const removePost = await Post.findByIdAndRemove(postId);
   if(removePost) {
   res.status(200).json({ message: 'contact deleted' });   
   } else {
      res.status(404).json({ message: 'Not found' });
   }
   
   };

   module.exports = removePost;