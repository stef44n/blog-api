const bcryptjs = require("bcryptjs");
const User = require("../models/user");

// @auth.js router
// router.post("/sign-up", async (req, res, next) => {
// TURNS INTO
const signUpController = async (req, res, next) => {
    return res.send("Received a POST HTTP method /sign-up ");

    // try {
    //     bcryptjs.hash(req.body.password, 10, async (err, hashedPassword) => {
    //         // if err, do something
    //         // otherwise, store hashedPassword in DB
    //         const user = new User({
    //             username: req.body.username,
    //             password: hashedPassword,
    //         });
    //         const result = await user.save();
    //     });
    //     res.redirect("/");
    // } catch (err) {
    //     return next(err);
    // }
};

module.exports = signUpController;
