import * as mongoose from "mongoose";
// const Schema = mongoose.Schema;

// const CommentSchema = new Schema({
//   content: { type: String, required: true },
//   comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }]
// },
//   {timestamps: {createdAt: 'created_at'}},
  
// );

// Create a new schema to hold comments for the NFT 
const commentSchema = new mongoose.Schema({
  comment: String,
  user: String,
  date: Date
});
// Create a new schema to hold NFTs
const nftSchema = new mongoose.Schema({
  name: String,
  id: String,
  price: Number,
  description: String,
  forSale: Boolean,
  comments: [commentSchema]
});
// Create a new schema to hold the list of NFTs
const listSchema = new mongoose.Schema({
  nfts: [nftSchema]
});

// Export the list model
//# sourceMappingURL=listnft.js.map




module.exports = mongoose.model("Comment", CommentSchema);

module.exports = mongoose.model("Comment", CommentSchema);