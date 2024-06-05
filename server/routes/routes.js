const express = require("express");
const router = express.Router();

const controller = require("../controller/controller");
router.get("/apiname", controller.getcomponents);


module.exports = router;