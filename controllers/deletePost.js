const Post = require("../models/post");

const deletePost = async (req, res) => {
    // return res.send(
    //     `Received a DELETE HTTP method /posts/${req.params.postId} `
    // );
    try {
        // Extract the post ID from the request parameters
        const { postId } = req.params;

        // Find the post by ID and delete it
        const deletedPost = await Post.findByIdAndDelete(postId);

        // If no post is found, send a 404 response
        if (!deletedPost) {
            return res.status(404).json({ message: "Post not found" });
        }

        // Send a success message as a JSON response
        res.status(200).json({ message: "Post deleted successfully" });
    } catch (error) {
        // If an error occurs, send a 500 response with the error message
        console.error("Error deleting post:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = deletePost;
