const express = require("express");
const { updateUserController } = require("../controller/userController");
const router = express.Router();

router.put("/:id", updateUserController);

module.exports = router;
