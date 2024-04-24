const logOutController = (req, res, next) => {
    // return res.send("Received a GET HTTP method /log-out ");

    req.logout((err) => {
        if (err) {
            return next(err);
        }
        res.redirect("/");
    });
};

module.exports = logOutController;
