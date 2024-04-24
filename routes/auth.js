const express = require("express");
const router = express.Router();

const signUpController = require("../controllers/signUpController");
const logInController = require("../controllers/logInController");
const logOutController = require("../controllers/logOutController");

// Routes
router.get("/sign-up", (req, res) => {
    return res.send("Received a GET HTTP method /sign-up ");

    // res.render("sign-up-form");
});

router.post("/sign-up", signUpController);

router.post("/log-in", logInController);

router.get("/log-out", logOutController);

// Export router
module.exports = router;
