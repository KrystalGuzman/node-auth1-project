const express = require("express");
const cors = require("cors");
const session = require("express-session");

const authRouter = require("../auth/auth-router.js");
const restricted = require("../auth/restricted-middleware.js")

// const secretKeeper = process.env.SECRET || "keep it secret, keep it safe"

const server = express();
const sessionConfig = {
  name: "cookieMonster",
  secret: "secret this is", //put on secrets
  cookie: {
    maxAge: 1000 * 60 * 60,
    secure: false, //true in production to send only over https
    httpOnly: true, //true means no access from JS

  },
  resave: false,
  saveUninitialized: true, //GDPR laws require to check with client
}
const serverConfig = {
  origin: "http://localhost:3000",
  credentials: true
}

server.use(express.json());
server.use(cors(serverConfig));
server.use(session(sessionConfig));
server.get('/api/users', restricted)
server.use("/api", authRouter);


server.get("/", (req, res) => {
  res.json({ api: "up" });
});

module.exports = server;
