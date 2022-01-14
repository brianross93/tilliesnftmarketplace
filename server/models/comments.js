import * as mongoose from "mongoose";
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  content: { type: String, required: true },
  comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }]
},
  {timestamps: {createdAt: 'created_at'}},
  
);


module.exports = mongoose.model("Comment", CommentSchema);