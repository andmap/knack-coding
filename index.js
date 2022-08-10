import express from "express";
import fs, { writeFileSync, readFileSync } from "fs";
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
  writeFileSync("./assets/clean_application.json", JSON.stringify(newData));
  res.send("OK");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
