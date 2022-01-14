const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  id:{ type: Number, required: true},
  username: { type: String, required: true },
  password: { type: String, required: true },
  accountAddress:[{type: Schema.Types.ObjectId, ref: 'AccountAddr'}],
  comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }]
});

module.exports = mongoose.model("User", UserSchema);