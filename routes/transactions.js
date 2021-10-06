const express = require("express");
const cors = require("cors");
const router = express.Router();
const {
  getTransactions,
  addTransaction,
  deleteTransaction,
} = require("../controllers/transactions");

const options = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204,
};

router
  .route("/transactions")
  .get(cors(options), getTransactions)
  .post(cors(options), addTransaction);

router.route("/transactions/:id").delete(cors(options), deleteTransaction);

module.exports = router;
