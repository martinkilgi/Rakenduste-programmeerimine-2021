const { Schema, model } = require('mongoose')

const postSchema = new Schema({
  id: { type: Number, required: true },
  user: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Post = model("Post", postSchema)

module.exports = Post