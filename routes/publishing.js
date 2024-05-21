const express = require("express");
const router = express.Router();
bodyParser = require("body-parser").json();

const getUnpublishedPosts = require("../controllers/getUnpublishedPosts");
const publishPost = require("../controllers/publishPost");
const unpublishPost = require("../controllers/unpublishPost");

// Routes
// Description: Retrieves all unpublished posts.
router.get("/posts/unpublished", getUnpublishedPosts);

// Description: Publishes a post.
router.put("/posts/:postId/publish", bodyParser, publishPost);

// Description: Unpublishes a post.
router.put("/posts/:postId/unpublish", bodyParser, unpublishPost);

// Export router
module.exports = router;
