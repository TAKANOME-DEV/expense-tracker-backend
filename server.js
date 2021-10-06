const express = require("express");
const cors = require("cors");
const colors = require("colors");
const transactions = require("./routes/transactions");

const app = express();

app.use(express.json());
app.use(cors());
app.use(transactions);

app.listen(
  process.env.PORT,
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode at port ${process.env.PORT}`
      .red.bold
  )
);
