const jwt = require("jsonwebtoken");
const User = require("../models/user");


async function authentication (req, res, next) {
    try {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(440).json("Please log in!");
    }

    try {
        const verifyToken = jwt.verify(token, process.env.SECRET_KEY);

        const user = await User.findById(verifyToken._id); //set user info object

        req.user = user; //allow access for any route after "next()" to user info object by calling res.user

        console.log(`Auth User Id: ${req.user._id}, Admin Status: ${req.user.isAdmin}`);

        next();
    } catch (err) {
        res.status(400).json({ERROR: err.message});
    }
} catch (err) {
    res.status(501).json("Internal Server Error");
}
};

module.exports = authentication;