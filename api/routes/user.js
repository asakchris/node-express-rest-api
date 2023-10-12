const express = require("express");

const UserController = require("../controllers/user");

const router = express.Router();

router.post("/signup", UserController.signUp);

router.post("/login", UserController.login);

router.get("/", UserController.get_all);

router.delete("/:userId", UserController.delete);

module.exports = router;
