const express = require("express");
const path = require("path");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcryptjs = require("bcryptjs");
require("dotenv").config();

const mongoDb = process.env.MONGO_DB;
mongoose.connect(mongoDb);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "mongo connection error"));
db.once("open", () => {
    console.log("Connected to MongoDB");
    // console.log(db.collections);
});

const User = mongoose.model(
    "User",
    new Schema({
        username: { type: String, required: true },
        password: { type: String, required: true },
    })
);

const app = express();
app.set("views", __dirname);
app.set("view engine", "ejs");

passport.use(
    new LocalStrategy(async (username, password, done) => {
        try {
            const user = await User.findOne({ username: username });
            const match = await bcryptjs.compare(password, user.password);
            if (!user) {
                return done(null, false, { message: "Incorrect username" });
            }
            if (!match) {
                // passwords do not match!
                return done(null, false, { message: "Incorrect password" });
            }
            return done(null, user);
        } catch (err) {
            return done(err);
        }
    })
);

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    try {
        const user = await User.findById(id);
        done(null, user);
    } catch (err) {
        done(err);
    }
});

app.use(session({ secret: "cats", resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    return res.send("Received a GET HTTP method");
    // res.render("index", { user: req.user });
});

//ROUTES
const authRouter = require("./routes/auth");

app.use("/", authRouter);

// app.get("/sign-up", (req, res) => res.render("sign-up-form"));

// app.get("/log-out", (req, res, next) => {
//     req.logout((err) => {
//         if (err) {
//             return next(err);
//         }
//         res.redirect("/");
//     });
// });

// app.post("/sign-up", async (req, res, next) => {
//     try {
//         bcryptjs.hash(req.body.password, 10, async (err, hashedPassword) => {
//             // if err, do something
//             // otherwise, store hashedPassword in DB
//             const user = new User({
//                 username: req.body.username,
//                 password: hashedPassword,
//             });
//             const result = await user.save();
//         });
//         res.redirect("/");
//     } catch (err) {
//         return next(err);
//     }
// });

// app.post(
//     "/log-in",
//     passport.authenticate("local", {
//         successRedirect: "/",
//         failureRedirect: "/",
//     })
// );

app.listen(3000, () => console.log("app listening on port 3000!"));
