require("dotenv").config();
console.log("Mongo URI:", process.env.MONGODB_URI);

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose"); // <-- ADD THIS
const connectDB = require("./config/db");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API Running");
});

app.get("/test-db", async (req, res) => {
  try {
    const admin = mongoose.connection.db.admin();
    const info = await admin.serverStatus();
    res.json({ status: "connected", info });
  } catch (err) {
    res.status(500).json({ status: "error", error: err.message });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
