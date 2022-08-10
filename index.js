import express from "express";
import { join } from "path";
import fs, { readFileSync } from "fs";

import { versions } from "process";
import { cleanUp } from "./helper.js";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/cleanup", (req, res) => {
  const data = JSON.parse(
    readFileSync("./assets/mock_application.json", "utf-8")
  );
  const newData = cleanUp(data);
  fs.writeFileSync("./assets/clean_application.json", JSON.stringify(newData));
  res.send("OK");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
