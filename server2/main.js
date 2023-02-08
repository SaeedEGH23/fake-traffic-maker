const express = require("express");

const app = express();

app.get("/download", (req, res) => {
  res.download("./downloadfilename");
});

app.listen(3000, () => {
  console.log("App listening on port 3000");
});
