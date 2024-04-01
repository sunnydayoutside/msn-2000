// msn home replica

// modules
var express = require('express');
var log4js = require("log4js");
var ejs = require("ejs")
var env = require("dotenv")


// essential things
var PORT = 3000
var indexRouter = require('./routes/index.js')
var errorRouter = require('./routes/error.js')
var contactRouter = require('./routes/error.js')

log4js.configure({
    appenders: {
      MSN: { type: "console" }, 
    },
    categories: {
      default: { appenders: ["MSN"], level: "all" }
     },
});

const logger = log4js.getLogger("MSN");

var app = express()
app.set('views', 'views')
app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/', express.static('assets')) // handles assets

app.use("/", indexRouter);

app.use('*', errorRouter);

app.listen(PORT, () => {
    logger.info(`Express listening on ${PORT}`)
});