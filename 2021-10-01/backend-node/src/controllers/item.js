const Item = require('../models/Item')

exports.getItems = async (req, res) => {
  const items = await Item.find({})
  
  res.status(200).send(items)
}

exports.createItem = async (req, res) => {
  const newItem = {
    name: "Table",
    quality: 46,
    unused: true,
    color: "red"
  }

  const createdItem = new Item(newItem)

  const savedItem = createdItem.save()

  res.status(200).send("yay")
}

exports.updateItem = async (req, res) => {
  const { id } = req.params;

  const item = await Item.findByIdAndUpdate({_id: id}, {name: "suvalinetest"});

  console.log(item);

  res.status(200).send("korras")
}

exports.deleteItem = async (req, res) => {
  const { id } = req.params;

  const item = await Item.findByIdAndRemove({ _id: id })
  //Muutsin findByIdAndDelete findByIdAndRemove vastu, sest tundus, et tootab kiiremini ja paremini?

  console.log(item)
}