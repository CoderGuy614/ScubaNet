const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require("path");
const expressValidator = require("express-validator");
const bodyParser = require("body-parser");

//Initialize express app
const app = express();

// Connect Database
const connectDB = require("./config/db");
connectDB();

// Routes

const userRoutes = require("./routes/user");
const authRoutes = require("./routes/auth");

//Middleware
app.use(bodyParser.json());
app.use(cookieParser());

//Routes Middleware
app.use("/api", userRoutes);
app.use("/api/auth", authRoutes);

// Serve static assets in production

if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`The server is running on ${PORT}`));
