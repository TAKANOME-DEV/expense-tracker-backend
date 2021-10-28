const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
// const apicache = require("apicache");
const getTransactions = require("./routes/getTransactions");
const addTransaction = require("./routes/addTransaction");
const deleteTransaction = require("./routes/deleteTransaction");

const app = express();

// let cache = apicache.middleware;

app.use(express.json());
app.use(cors());
app.use(helmet());
// app.use(cache("2 minutes"));
app.use(getTransactions);
app.use(addTransaction);
app.use(deleteTransaction);

app.listen(
  process.env.PORT,
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode at port ${process.env.PORT}`
  )
);
