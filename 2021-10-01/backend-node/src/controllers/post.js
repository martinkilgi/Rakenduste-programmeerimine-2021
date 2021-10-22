const Post = require('../models/Post')

exports.getPosts = async (req, res) => {
  const posts = await Post.find({})
  
  res.status(200).send(posts)
}

exports.createPost = async (req, res) => {
  //saaksite info katte red.bodyst

  const {title, text} = req.body;

  const newPost = {
    title: title,
    text: text
  }

  const createdPost = new Post(newPost);

  const savedPost = createdPost.save();

  res.status(200).send("yay")
}

exports.updatePost = async (req, res) => {
  const { id } = req.params;

  const post = await Post.findByIdAndUpdate({_id: id}, {title: "Testin, et muudaks titlet"});

  console.log(post);

  res.status(200).send("korras")
}

exports.deletePost = async (req, res) => {
  const { id } = req.params;

  const post = await Post.findByIdAndRemove({ _id: id })
  //Muutsin findByIdAndDelete findByIdAndRemove vastu, sest tundus, et tootab kiiremini ja paremini?

  console.log(post);
}