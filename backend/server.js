require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const scrapRoutes = require("./routes/scrapRoutes");

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.get("/", (req, res) => {
  res.send("ScrapMart backend running");
});

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/support", require("./routes/supportRoutes"));

const PORT = process.env.PORT || 5000;
// const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.use("/api/scrap", scrapRoutes);
