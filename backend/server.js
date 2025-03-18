const express = require("express");
const cors = require("cors");
require("dotenv").config();

const userRoutes = require("./routes/UserRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);

app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
