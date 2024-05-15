// bodyParser = require("body-parser").json();
const Post = require("../models/post");

const createPost = async (req, res) => {
    // return res.send("Received a POST HTTP method /posts ");
    // console.log("Request Body:", req.body); // Log the request body

    try {
        // Extract post data from the request body
        const { title, content, author } = req.body;

        // Create a new post object
        const newPost = new Post({
            title,
            content,
            author,
            published: false, // By default, set published to false
            createdAt: new Date(),
            updatedAt: new Date(),
        });

        // Save the new post to the database
        const savedPost = await newPost.save();

        // Send the saved post as a JSON response
        res.status(201).json({ post: savedPost });
    } catch (error) {
        // If an error occurs, send a 500 response with the error message
        console.error("Error creating post:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = createPost;
