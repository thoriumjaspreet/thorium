// const express = require('express');
// const router = express.Router();
// const UserModel= require("../models/userModel.js")
// //const UserModel= require("../controllers/userController")
// const Usercontroller= require("../controllers/UserController")
// router.get("/test-me", function (req, res) {
//     res.send("My first ever api!")
// })

// router.post("/createBook",UserController.createBook);

// router.get("/getBook", UserController.getBook)

// module.exports = router;
const express = require('express');

const router = express.Router();


const allController = require('../controllers/allController')



router.post('/createNewAuthor', allController.createNewAuthor)
router.post('/createNewBook', allController.createNewBook)
router.get('/allBooks', allController.allBooks)
router.get('/updatedBookPrice', allController.upadatedBookPrice)
router.get('/authorsName', allController.authorsName)

module.exports = router;