const express = require("express");
const router = express.Router();

const { handleDeleteTransaction } = require("../controllers/deleteTransaction");

router.route("/transactions/:id").delete(handleDeleteTransaction);

module.exports = router;
