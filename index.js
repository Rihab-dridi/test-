const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;
require("dotenv").config();
const connectDB = require("./config/connectDB");
connectDB();

//middleware
app.use(cors());
app.use(express.json());
//routes
app.use("/api/contacts", require("./routes/contacts"));
app.use("/api/books", require("./routes/books"));
app.listen(port, (err) => {
  err
    ? console.log(err)
    : console.log(`the server is up and running on ${port}`);
});
