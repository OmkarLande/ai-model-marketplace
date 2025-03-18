const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const userRoutes = require("./routes/UserRoutes");
const aiModelRoutes = require("./routes/AIModelRoutes");

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173", // Allow frontend
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true, // Enable cookies/sessions if needed
  })
);

app.use(express.json());
app.use(cookieParser());

app.use("/api/users", userRoutes);
app.use("/api/models", aiModelRoutes);

app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
