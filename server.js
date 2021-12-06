require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const getTransactions = require("./routes/getTransactions");
const addTransaction = require("./routes/addTransaction");
const deleteTransaction = require("./routes/deleteTransaction");

const app = express();

const PORT = process.env.PORT;

app.use(express.json());

const allowlist = [
  "https://takanome-expense-tracker.netlify.app",
  process.env.LOCAL_CORS,
];
const corsOptions = {
  origin: function (origin, callback) {
    console.log(origin);
    const isAllowList = allowlist.indexOf(origin) !== -1;
    if (isAllowList) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

app.use(cors(corsOptions));
app.use(helmet());
app.use(getTransactions);
app.use(addTransaction);
app.use(deleteTransaction);

app.listen(
  PORT,
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode at port ${PORT}`
  )
);
