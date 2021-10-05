const db = require("../db");

// @desc GET All Transactions
// @route GET /transactions
// @access Public

exports.getTransactions = async (req, res, next) => {
  try {
    const transactions = await db("transactions").then((transaction) =>
      res.json(transaction)
    );
    return transactions;
  } catch (err) {
    res.status(400).json("Something Went Wrong");
    console.error(err);
  }
};

// @desc ADD Transaction
// @route POST /transactions
// @access Public

exports.addTransaction = async (req, res, next) => {
  const { name, amount } = req.body;

  try {
    const transaction = await db
      .select()
      .from("transactions")
      .returning("*")
      .insert({
        name: name,
        amount: amount,
        createat: new Date(),
      })
      .then((transaction) => res.json(transaction));

    return transaction;
  } catch (err) {
    res.status(400).json("Transaction Failed");
    console.error(err);
  }
};

// @desc DELETE Transaction
// @route DELETE /transactions/:id
// @access Public

exports.deleteTransaction = async (req, res, next) => {
  const { id } = req.params;

  try {
    const transaction = await db("transactions")
      .where({ id })
      .returning("*")
      .del()
      .then((transaction) => res.json(transaction[0]));
    return transaction;
  } catch (err) {
    res.status(404).json("Transaction Not Found");
    console.error(err);
  }
};
