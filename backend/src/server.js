const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const cors = require("cors");


const app = express();
app.use(cors())

const server = require("http").Server(app)

const io = require("socket.io")(server)

const conectedUsers = {}

io.on("connection", socket => {
  const {user} = socket.handshake.query
  conectedUsers[user] = socket.id
  
  /* socket.on("hello", message =>{
    console.log(message)
  }) */

})

mongoose.connect(
  "mongodb+srv://dev:manogel@cluster0-xdxft.mongodb.net/tinder?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

app.use( (req, res, next) => {
  req.conectedUsers = conectedUsers
  req.io = io;
  return next();
})

app.use(express.json());
app.use(routes);
server.listen(3333);
