const {Video} = require('../../models/video')

const  addVideo = async (req, res) => {
const {_id} = req.user;
const {body} = req;
const newVideo = await Video.create({...body, owner: _id});
res.status(201).json(newVideo);

}

module.exports = addVideo;