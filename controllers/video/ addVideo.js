const {Video} = require('../../models/video')

const  addVideo = async (req, res) => {
const {body} = req;
const newVideo = await Video.create(body);
res.status(200).json(newVideo);

}

module.exports = addVideo;