const express = require("express");
const router = express.Router();

// Description: Retrieves all comments for a specific post.
router.get("/posts/:postId/comments", (req, res) => {
    return res.send("Received a GET HTTP method /posts/:postId/comments ");
});

// Description: Creates a new comment for a post.
router.post("/posts/:postId/comments", (req, res) => {
    return res.send("Received a POST HTTP method /posts/:postId/comments ");
});

// Description: Updates an existing comment.
router.put("/posts/:postId/comments/:commentId", (req, res) => {
    return res.send(
        "Received a PUT HTTP method /posts/:postId/comments/:commentId "
    );
});

// Description: Deletes a comment.
router.delete("/posts/:postId/comments/:commentId", (req, res) => {
    return res.send(
        "Received a DELETE HTTP method /posts/:postId/comments/:commentId "
    );
});

// Export router
module.exports = router;
