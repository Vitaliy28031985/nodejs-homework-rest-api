const {Video} = require('../../models/video')

const getVideos = async (req, res) => {
   const videos = await Video.find({});
   res.status(200).json(videos);
}

module.exports = getVideos;