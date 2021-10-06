const express = require("express");
const cors = require("cors");
const router = express.Router();
const {
  getTransactions,
  addTransaction,
  deleteTransaction,
} = require("../controllers/transactions");

const allowlist = ["https://expense-tracker-frontend.netlify.app/"];
const corsOptionsDelegate = (req, callback) => {
  let corsOptions;
  if (allowlist.indexOf(req.header("Origin")) !== -1) {
    corsOptions = { origin: true }; // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { origin: false }; // disable CORS for this request
  }
  callback(null, corsOptions); // callback expects two parameters: error and options
};

router
  .route("/transactions")
  .get(cors(corsOptionsDelegate), getTransactions)
  .post(cors(corsOptionsDelegate), addTransaction);

router
  .route("/transactions/:id")
  .delete(cors(corsOptionsDelegate), deleteTransaction);

module.exports = router;
