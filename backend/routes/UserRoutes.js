const express = require("express");
const { signup, login, getUserById } = require("../controllers/UserController");

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/:id", getUserById);


module.exports = router;
