const express = require("express");
const router = express.Router();
const {
  getTransactions,
  addTransaction,
  deleteTransaction,
} = require("../controllers/transactions");

router.route("/transactions").get(getTransactions).post(addTransaction);

router.route("/transactions/:id").delete(deleteTransaction);

module.exports = router;
