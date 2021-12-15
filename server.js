require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const getTransactions = require("./routes/getTransactions");
const addTransaction = require("./routes/addTransaction");
const deleteTransaction = require("./routes/deleteTransaction");

const app = express();

app.use(express.json());

const allowlist = [process.env.PROD_ENDPOINT, process.env.LOCAL_CORS];
const corsOptions = {
  origin: function (origin, callback) {
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
  process.env.PORT,
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode at port ${process.env.PORT}`
  )
);
