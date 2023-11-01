const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/", (_req, res) => {
  res.send({ hejsan: "Svejsan" });
});

port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server redo på http://localhost:${port}`);
});
