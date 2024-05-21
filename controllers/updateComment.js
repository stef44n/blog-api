const Post = require("../models/post");
const Comment = require("../models/comment");

const updateComment = async (req, res) => {
    // return res.send(
    //         `Received a PUT HTTP method /posts/${req.params.postId}/comments/${req.params.commentId} `
    //     );
    try {
        // Extract the post ID and comment ID from the request parameters
        const { postId, commentId } = req.params;

        // Extract the updated comment data from the request body
        const { content, author } = req.body;

        // Find the post by ID
        const post = await Post.findById(postId);
        // console.log(req.params, post);

        // If no post is found, send a 404 response
        if (!post) {
            return res.status(404).json({ message: "Post not found" });
        }

        // Find the comment by ID and update it
        const updatedComment = await Comment.findByIdAndUpdate(
            commentId,
            {
                content,
                author,
                updatedAt: new Date(),
            },
            { new: true } // This option returns the updated document
        );

        // If no comment is found, send a 404 response
        if (!updatedComment) {
            return res.status(404).json({ message: "Comment not found" });
        }

        // Send the updated comment as a JSON response
        res.status(200).json({ comment: updatedComment });
    } catch (error) {
        // If an error occurs, send a 500 response with the error message
        console.error("Error updating comment:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = updateComment;
