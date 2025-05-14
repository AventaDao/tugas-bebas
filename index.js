// index.js
const express = require("express");
require("dotenv").config();
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use(express.json());
app.use("/users", require("./routes/userRoute"));

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));

