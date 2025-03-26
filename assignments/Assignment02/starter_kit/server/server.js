require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const recipesRouter = require("./recipes_router");

const app = express();
const PORT = process.env.PORT || 8001;

// Middleware
app.use(cors());
app.use(express.json());
app.use("/recipe", recipesRouter);

// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/recipesDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});