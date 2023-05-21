const express = require("express");
const expressUpload = require('express-fileupload');
const bodyParser = require("body-parser")
const UserRoute = require("./routes/user.routes");
const ToDoRoute = require('./routes/todo.router');
const app = express();

app.use(bodyParser.json());
app.use(expressUpload({
    useTempFiles: true,
    limits:{
        fieldSize: 50 *2024*1024
    }
}));

 app.use("/",UserRoute);
 app.use("/",ToDoRoute);

module.exports = app;