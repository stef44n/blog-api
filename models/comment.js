const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    content: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, ref: "User", required: true },
    post: { type: Schema.Types.ObjectId, ref: "Post", required: true },
    createdAt: { type: Date, default: Date.now },
});

// Virtual for comment's URL
CommentSchema.virtual("url").get(function () {
    // We don't use an arrow function as we'll need the this object
    return `/catalog/comment/${this._id}`;
});

// Export model
module.exports = mongoose.model("Comment", CommentSchema);
