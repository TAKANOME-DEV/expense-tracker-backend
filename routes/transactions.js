const express = require("express");
const cors = require("cors");
const router = express.Router();
const {
  getTransactions,
  addTransaction,
  deleteTransaction,
} = require("../controllers/transactions");

router
  .route("/transactions")
  .get(cors(), getTransactions)
  .post(cors(), addTransaction);

router.route("/transactions/:id").delete(cors(), deleteTransaction);

module.exports = router;
