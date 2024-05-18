const Post = require("../models/post");
const Comment = require("../models/comment");

const createComment = async (req, res) => {
    // return res.send(
    //     `Received a POST HTTP method /posts/${req.params.postId}/comments `
    // );

    try {
        // Extract the post ID from the request parameters
        const { postId } = req.params;

        // Extract comment data from the request body
        const { content, author } = req.body;

        // Find the post by ID
        const post = await Post.findById(postId);

        // If no post is found, send a 404 response
        if (!post) {
            return res.status(404).json({ message: "Post not found" });
        }

        // Initialize the comments array if it's undefined
        if (!post.comments) {
            post.comments = [];
        }

        // Create a new comment object
        const newComment = new Comment({
            content,
            author,
            post: postId,
            createdAt: new Date(),
        });

        // Save the new comment to the database
        const savedComment = await newComment.save();

        // Add the comment to the post's comments array
        post.comments.push(savedComment);
        await post.save();

        // Send the saved comment as a JSON response
        res.status(201).json({ comment: savedComment });
    } catch (error) {
        // If an error occurs, send a 500 response with the error message
        console.error("Error creating comment:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = createComment;
