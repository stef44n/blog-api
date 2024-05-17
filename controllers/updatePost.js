const Post = require("../models/post");

const updatePost = async (req, res) => {
    // return res.send(`Received a PUT HTTP method /posts/${req.params.postId} `);
    try {
        // Extract the post ID from the request parameters
        const { postId } = req.params;

        // Extract the updated post data from the request body
        const { title, content, published } = req.body;

        // Find the post by ID and update it with the new data
        const updatedPost = await Post.findByIdAndUpdate(
            postId,
            {
                title,
                content,
                published,
                updatedAt: new Date(),
            },
            { new: true } // This option returns the updated document
        );
        console.log(updatedPost);

        // If no post is found, send a 404 response
        if (!updatedPost) {
            return res.status(404).json({ message: "Post not found" });
        }

        // Send the updated post as a JSON response
        res.status(200).json({ post: updatedPost });
    } catch (error) {
        // If an error occurs, send a 500 response with the error message
        console.error("Error updating post:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = updatePost;
