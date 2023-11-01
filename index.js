const express = require("express");

const app = express(),
  port = process.env.PORT || 3000;

app.get("/", (_req, res) => {
  res.send({ hejsan: "Svejsan" });
});

app.listen(port, () => {
  console.log(`Server redo på http://localhost:${port}`);
});
