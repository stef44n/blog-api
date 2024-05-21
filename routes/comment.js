const express = require("express");
const router = express.Router();
bodyParser = require("body-parser").json();

const createComment = require("../controllers/createComment");
const getCommentsForPost = require("../controllers/getCommentsForPost");
const updateComment = require("../controllers/updateComment");
const deleteComment = require("../controllers/deleteComment");

// Description: Retrieves all comments for a specific post.
router.get("/posts/:postId/comments", bodyParser, getCommentsForPost);

// Description: Creates a new comment for a post.
router.post("/posts/:postId/comments", bodyParser, createComment);

// Description: Updates an existing comment.
router.put("/posts/:postId/comments/:commentId", bodyParser, updateComment);

// Description: Deletes a comment.
router.delete("/posts/:postId/comments/:commentId", deleteComment);

// Export router
module.exports = router;
