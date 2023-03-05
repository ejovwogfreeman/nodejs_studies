const express = require("express");
const dotenv = require("dotenv");
const blogRoutes = require("./routes/blogRoutes");
const connectDB = require("./config/db");
var cors = require("cors");

dotenv.config();
const port = process.env.PORT || 5000;
connectDB();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/blogs", blogRoutes);

app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
