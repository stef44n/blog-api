const Post = require("../models/post");
const Comment = require("../models/comment");

const deleteComment = async (req, res) => {
    // return res.send(
    //     `Received a DELETE HTTP method /posts/${req.params.postId}/comments/${req.params.commentId} `
    // );
    try {
        // Extract the post ID and comment ID from the request parameters
        const { postId, commentId } = req.params;

        // Find the post by ID
        const post = await Post.findById(postId);

        // If no post is found, send a 404 response
        if (!post) {
            return res.status(404).json({ message: "Post not found" });
        }

        // Find the comment by ID and delete it
        const deletedComment = await Comment.findByIdAndDelete(commentId);

        // If no comment is found, send a 404 response
        if (!deletedComment) {
            return res.status(404).json({ message: "Comment not found" });
        }

        // Remove the comment reference from the post's comments array
        post.comments.pull(commentId);
        await post.save();

        // Send a success message as a JSON response
        res.status(200).json({ message: "Comment deleted successfully" });
    } catch (error) {
        // If an error occurs, send a 500 response with the error message
        console.error("Error deleting comment:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = deleteComment;
