const mongoose = require("mongoose");

const ListNftSchema = new mongoose.Schema({
  name:{
    type: String,
    required: true
  },
  id: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  forSale: {
    type: Boolean,
    required: false
  }
});

const ListModel = mongoose.model("list", ListNftSchema);

module.exports = ListModel;
