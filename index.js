const express = require("express");

const app = express();

app.use((req, res, next) => {
  res.setHeader("ngrok-skip-browser-warning", "please-no");
  next();
});

app.use(express.static("public"));

app.listen(3000, () => {
  console.log("app is listening on port 3000");
});
