const Post = require("../models/post");
const Comment = require("../models/comment");

const getCommentsForPost = async (req, res) => {
    // return res.send(
    //     `Received a GET HTTP method /posts/${req.params.postId}/comments `
    // );
    try {
        // Extract the post ID from the request parameters
        const { postId } = req.params;

        // Find the post by ID
        const post = await Post.findById(postId).populate("comments");

        // If no post is found, send a 404 response
        if (!post) {
            return res.status(404).json({ message: "Post not found" });
        }

        // Send the comments as a JSON response
        res.status(200).json({ comments: post.comments });
    } catch (error) {
        // If an error occurs, send a 500 response with the error message
        console.error("Error fetching comments:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = getCommentsForPost;
