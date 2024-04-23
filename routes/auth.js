const express = require("express");
const router = express.Router();
const passport = require("passport");

// Routes
router.get("/sign-up", (req, res) => {
    return res.send("Received a GET HTTP method /sign-up ");

    // res.render("sign-up-form");
});

router.post(
    "/log-in",
    passport.authenticate("local", {
        successRedirect: "/",
        failureRedirect: "/",
    })
);

router.get("/log-out", (req, res, next) => {
    return res.send("Received a GET HTTP method /log-out ");

    // req.logout((err) => {
    //     if (err) {
    //         return next(err);
    //     }
    //     res.redirect("/");
    // });
});

router.post("/sign-up", async (req, res, next) => {
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
});

// Export router
module.exports = router;
