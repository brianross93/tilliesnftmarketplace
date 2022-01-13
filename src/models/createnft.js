const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CreatenftSchema = new Schema({
  id:{ type: Number, required: true},
  title: { type: String, required: true },
  file: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  ownedby:[{type: Schema.Types.ObjectId, ref: 'AccountAddr'}],
  comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }]
});

module.exports = mongoose.model("Create Nft", CreatenftSchema);