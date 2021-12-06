const db = require("../db");

/**
 * @desc ADD Transaction
 * @route POST /transactions
 * @access Public
 */

exports.handleAddTransaction = async (req, res) => {
  try {
    const { name, amount } = req.body;

    if (!name || !amount) {
      return res.status(400).json("Please Fill All The Fields");
    }

    const transaction = await db("transactions").returning("*").insert({
      name: name,
      amount: amount,
      createat: new Date(),
    });

    res.json(transaction);
  } catch (err) {
    res.status(400).json("Transaction Failed");
    console.error(err);
  }
};
