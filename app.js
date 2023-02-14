const express = require("express");
require("dotenv").config();
const app = express();
const openaiRoute = require("./routes/openaiRoute");

const port = 8080;

/** HTTP GET Request */
app.get("/", (req, res) => {
  res.status(201).json("Home GET Request");
});

/** api routes */
app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use("/api/1.0", openaiRoute);

try {
  app.listen(port, () => {
    console.log(`Server connected to http://localhost:${port}`);
  });
} catch (error) {
  console.log("Cannot connect to the server");
}
