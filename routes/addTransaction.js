const express = require("express");
const router = express.Router();
const { handleAddTransaction } = require("../controllers/addTransaction");

router.route("/transactions").post(handleAddTransaction);

module.exports = router;
