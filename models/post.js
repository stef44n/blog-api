const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PostSchema = new Schema({
    title: { type: String, required: true, maxLength: 100 },
    content: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, ref: "User", required: true },
    published: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

// Virtual for post's URL
PostSchema.virtual("url").get(function () {
    // We don't use an arrow function as we'll need the this object
    return `/catalog/post/${this._id}`;
});

// Export model
module.exports = mongoose.model("Post", PostSchema);
