const Post = require("../models/post");

const getUnpublishedPosts = async (req, res) => {
    // return res.send(`Received a GET HTTP method /posts/unpublished`);
    try {
        // Find all posts where the 'published' field is set to false
        const unpublishedPosts = await Post.find({ published: false });

        // Send the unpublished posts as a JSON response
        res.status(200).json({ posts: unpublishedPosts });
    } catch (error) {
        // If an error occurs, send a 500 response with the error message
        console.error("Error fetching unpublished posts:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = getUnpublishedPosts;
