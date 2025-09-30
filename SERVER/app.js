const express = require("express");
const path = require("path");
const http = require("http");
const cors = require("cors");
const {config} = require("./config/secret")

const {routesInit} = require("./routes/config_routes")

require("./db/mongoConnect");

const app = express();

// מאפשר ללקוח מגישה אחרת (5174) לשלוח בקשות
app.use(cors());

// כל מידע שמתקבל מהלקוח- הופך לגייסון אם אפשרי
app.use(express.json());

app.use(express.static(path.join(__dirname,"public")));
console.log(__dirname+" line 11");

routesInit(app)

const server = http.createServer(app);

// let port = process.env.PORT || 3008;
let port = config.port || 3008;
server.listen(port, ()=>{console.log("Server running on port", port);});