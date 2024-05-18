const Post = require("../models/post");

const getPostById = async (req, res) => {
    //     return res.send(`Received a GET HTTP method /posts/${req.params.postId}`);

    try {
        // Extract the post ID from the request parameters
        const { postId } = req.params;

        // Find the post by ID
        const post = await Post.findById(postId);

        // If no post is found, send a 404 response
        if (!post) {
            return res.status(404).json({ message: "Post not found" });
        }

        // Send the found post as a JSON response
        res.status(200).json({ post });
    } catch (error) {
        // If an error occurs, send a 500 response with the error message
        console.error("Error fetching post:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = getPostById;
