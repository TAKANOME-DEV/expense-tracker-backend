const express = require("express");
const router = express.Router();
const { handleGetTransactions } = require("../controllers/getTransactions");

router.route("/transactions").get(handleGetTransactions);

module.exports = router;
