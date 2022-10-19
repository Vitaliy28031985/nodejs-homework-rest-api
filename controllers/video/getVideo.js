const {Video} = require('../../models/video')

const getVideos = async (req, res) => {
   const { _id } = req.user;
   const videos = await Video.find({ owner: _id });
   res.status(200).json(videos);
}

module.exports = getVideos;