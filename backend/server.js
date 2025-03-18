const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const userRoutes = require("./routes/UserRoutes");
const aiModelRoutes = require("./routes/AIModelRoutes");

const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use("/api/users", userRoutes);
app.use("/api/models", aiModelRoutes);

app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
