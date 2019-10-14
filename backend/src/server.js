const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const server = express();

mongoose.connect(
  "mongodb+srv://dev:manogel@cluster0-xdxft.mongodb.net/tinder?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

server.use(express.json());
server.use(routes);
server.listen(3333);
