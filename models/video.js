const {Schema, model} = require('mongoose');

const videoSchema = Schema({
  link: {
    type: String,
    required: true, 
  },
  title: {
    type: String,
    required: true, 
  },

}, {versionKey: false, timestamps: true})

const Video = model("video", videoSchema);

module.exports = {
  Video
}