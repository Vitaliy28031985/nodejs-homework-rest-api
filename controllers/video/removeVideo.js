const {Video} = require('../../models/video');

const removeVideo = async (req, res) => {
const {videoId} = req.params;
const removeVideo = await Video.findByIdAndRemove(videoId);
if(removeVideo) {
   res.status(200).json({ message: 'video deleted' });   
   } else {
      res.status(404).json({ message: 'Not found' });
   }
   
}

module.exports = removeVideo;