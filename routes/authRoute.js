const express = require('express');
const { registerController } = require('../controller/authController');
const router = express.Router();

/* Register */

router.post("/register",registerController);

module.exports = router;