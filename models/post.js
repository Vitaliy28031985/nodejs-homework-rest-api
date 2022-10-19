const {Schema, model} = require('mongoose');

const postSchema = Schema({
  title: {
    type: String,
    required: true, 
  },
  text: {
    type: String,
    required: true, 
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  }

}, {versionKey: false, timestamps: true})

const Post = model("post", postSchema);

module.exports = {
  Post
}