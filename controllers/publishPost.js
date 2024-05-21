const Post = require("../models/post");

const publishPost = async (req, res) => {
    // return res.send(
    //     `Received a PUT HTTP method /posts/${req.params.postId}/publish`
    // );
    try {
        // Extract the post ID from the request parameters
        const { postId } = req.params;

        // Find the post by ID and update its 'published' field to true
        const updatedPost = await Post.findByIdAndUpdate(
            postId,
            { published: true },
            { new: true } // This option returns the updated document
        );

        // If no post is found, send a 404 response
        if (!updatedPost) {
            return res.status(404).json({ message: "Post not found" });
        }

        // Send the updated post as a JSON response
        res.status(200).json({ post: updatedPost });
    } catch (error) {
        // If an error occurs, send a 500 response with the error message
        console.error("Error publishing post:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = publishPost;
