const express = require("express");
const {
  updateUserController,
  deleteUserController,
} = require("../controller/userController");
const router = express.Router();

router.put("/:id", updateUserController).delete("/:id", deleteUserController);

module.exports = router;
