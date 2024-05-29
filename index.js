const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./Databse/databse");
const app = express();

dotenv.config();

const PORT = process.env.PORT || 4000;

app.use(express.json());

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

connectDB();
app.use(express.json());

const routes = require("./Routes/routes");

app.use("/", routes);

app.listen(PORT, () => {

  console.log(`Server is running on port ${PORT}`);
});
