const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")
//const UserModel= require("../controllers/userController")
const Usercontroller= require("../controllers/UserController")
router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createBook",UserController.createBook);

router.get("/getBook", UserController.getBook)

module.exports = router;