const express = require("express");
const cors = require("cors");
const router = express.Router();
const {
  getTransactions,
  addTransaction,
  deleteTransaction,
} = require("../controllers/transactions");

const options = {
  origin: true,
  methods: ["POST", "GET", "DELETE"],
  credentials: true,
  maxAge: 3600,
};

router
  .route("/transactions")
  .get(cors(options), getTransactions)
  .post(cors(options), addTransaction);

router.route("/transactions/:id").delete(cors(options), deleteTransaction);

module.exports = router;
