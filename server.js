if(process.env.NODE_ENV!=='production')
{
  require('dotenv').config()
}

var express = require("express");
const expressLayouts = require("express-ejs-layouts");
var app = express();

app.set("view engine", "ejs");
app.set('views', './views');
app.set("layouts", "layouts/layouts");

const indexRouter = require("./routes/index");

app.use(express.static("public"));
app.use("/", indexRouter);
app.use(expressLayouts);


const mongoose= require("mongoose")
mongoose.connect(process.env.DATABASE_URL,{useNewUrlParser:true})
const db=mongoose.connection
db.on('error',error => console.log(error))
db.once('open',()=>console.log('connected to mongoose'))

app.get("/", (req, res) => {
  res.send("hellokkkk");
});
app.listen(3000);
