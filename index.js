const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const ParseMethods = require("./services/parse-service");

app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.post("/api/parseInput", (req, res) => {
  if (req.body.input.includes("Routing Interfaces:")) {
    res.send(
      JSON.stringify(ParseMethods.parseRoutingInterface(req.body.input))
    );
  } else if (req.body.input.includes("VLAN")) {
    res.send(JSON.stringify(ParseMethods.parseVlan(req.body.input)));
  } else {
    res.send(JSON.stringify("wrong input"));
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
