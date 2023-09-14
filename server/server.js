const express = require("express");
const app = express();

app.get("/api", (req, res) => {
  res.json({ users: ["1", "2"] });
});

app.listen(5000, () => {
  console.log("server");
});
