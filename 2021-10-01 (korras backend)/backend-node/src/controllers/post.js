const Post = require('../models/Post')
var mongoose = require('mongoose');
var ObjectId = require('mongodb').ObjectID;


exports.getPosts = async (req, res) => {
  const posts = await Post.find({})
  
  res.status(200).send(posts)
}

exports.getOnePost = async (req, res) => {
  const {id} = req.params;

  if (id.match(/^[0-9a-fA-F]{24}$/)) {
    post = await Post.find({ _id: id })
  }

  console.log(post);

  res.status(200).send(post)
  

}

exports.createPost = async (req, res) => {

  const {id, title, description, user, today} = req.body.post;

  console.log(req.body.post.id);

  const newPost = {
    id: id,
    title: title,
    description: description,
    user: user,
    date: today
  }

  const createdPost = new Post(newPost);

  const savedPost = createdPost.save();

  res.status(200).send("yay")
}

exports.updatePost = async (req, res) => {
  const { id, title, description, user } = req.body.post;

  console.log(id);

  const filter = { _id: id };
  const update = { title: title, description: description, user: user};

  const post = await Post.findByIdAndUpdate(filter, update);

  console.log(post);

  res.status(200).send("korras")
}

exports.deletePost = async (req, res) => {
  const { id } = req.params;

  const post = await Post.findByIdAndRemove({ _id: id })
  //Muutsin findByIdAndDelete findByIdAndRemove vastu, sest tundus, et tootab kiiremini ja paremini?

  console.log(post);
}