const db = require("../db");

/**
 * @desc GET All Transactions
 * @route GET /transactions
 * @access Public
 */

exports.handleGetTransactions = async (req, res) => {
  try {
    const transactions = await db("transactions");

    return res.json(transactions);
  } catch (err) {
    res.status(400).json("Ops !! Something Went Wrong");
    console.error(err);
  }
};
