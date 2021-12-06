const db = require("../db");

/**
 * @desc DELETE Transaction
 * @route DELETE /transactions/:id
 *  @access Public
 */

exports.handleDeleteTransaction = async (req, res) => {
  try {
    const { id } = req.params;
    const transaction = await db("transactions")
      .where({ id })
      .returning("*")
      .del();
    res.json(transaction[0]);
  } catch (err) {
    res.status(404).json("Transaction Not Found");
    console.error(err);
  }
};
