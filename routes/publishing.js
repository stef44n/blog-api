const express = require("express");
const router = express.Router();

// Routes
// Description: Retrieves all unpublished posts.
router.get("/posts/unpublished", (req, res) => {
    return res.send(`Received a GET HTTP method /posts/unpublished`);
});

// Description: Publishes a post.
router.put("/posts/:postId/publish", (req, res) => {
    return res.send(
        `Received a PUT HTTP method /posts/${req.params.postId}/publish`
    );
});

// Description: Unpublishes a post.
router.put("/posts/:postId/unpublish", (req, res) => {
    return res.send(
        `Received a PUT HTTP method /posts/${req.params.postId}/unpublish`
    );
});

// Export router
module.exports = router;
