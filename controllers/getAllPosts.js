const Post = require("../models/post");

const getAllPosts = async (req, res) => {
    // return res.send("Received a GET HTTP method /posts ");
    try {
        // Fetch all published posts from the database
        const posts = await Post.find({ published: true }).sort({
            createdAt: -1,
        });

        // If there are no posts, send a 404 response
        if (!posts || posts.length === 0) {
            return res.status(404).json({ message: "No posts found" });
        }

        // If posts are found, send them as a JSON response
        res.status(200).json({ posts });
    } catch (error) {
        // If an error occurs, send a 500 response with the error message
        console.error("Error fetching posts:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = getAllPosts;
