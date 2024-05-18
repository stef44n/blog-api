const express = require("express");
const router = express.Router();
bodyParser = require("body-parser").json();

const getAllPosts = require("../controllers/getAllPosts");
const getPostById = require("../controllers/getPostById");
const createPost = require("../controllers/createPost");
const updatePost = require("../controllers/updatePost");
const deletePost = require("../controllers/deletePost");

// Routes
// Description: Retrieves all published posts.
router.get("/posts", getAllPosts);

// Description: Retrieves a specific post by its ID.
router.get("/posts/:postId", getPostById);

// Description: Creates a new post.
router.post("/posts", bodyParser, createPost);

// Description: Updates an existing post by its ID.
router.put("/posts/:postId", bodyParser, updatePost);

// Description: Deletes a post by its ID.
router.delete("/posts/:postId", deletePost);

// Export router
module.exports = router;
