const mongoose = require("mongoose");

const MintNftSchema = new mongoose.Schema({
  name: {
      type: String,
      required: true
  },
  file: {
    type: String,
    required: false,
  }
});

module.exports = mongoose.model("mint", MintNftSchema);