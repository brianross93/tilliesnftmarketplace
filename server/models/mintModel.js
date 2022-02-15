const mongoose = require("mongoose");
// Create a databse model for when an NFT is minted. When an NFT is minted, it is added to the database.
const mintSchema = new mongoose.Schema({
  name: String,
  id: String,
  price: Number,
  description: String,
  forSale: Boolean
});





module.exports = mongoose.model("mint", mintSchema);