const express = require("express");
const router = express.Router();

// Routes
// Description: Retrieves all published posts.
router.get("/posts", (req, res) => {
    return res.send("Received a GET HTTP method /posts ");
});

// Description: Retrieves a specific post by its ID.
router.get("/posts/:postId", (req, res) => {
    return res.send("Received a GET HTTP method /posts/:postId ");
});

// Description: Creates a new post.
router.post("/posts", (req, res) => {
    return res.send("Received a POST HTTP method /posts ");
});

// Description: Updates an existing post by its ID.
router.put("/posts/:postId", (req, res) => {
    return res.send("Received a PUT HTTP method /posts/:postId ");
});

// Description: Deletes a post by its ID.
router.delete("/posts/:postId", (req, res) => {
    return res.send("Received a DELETE HTTP method /posts/:postId ");
});

// Export router
module.exports = router;
