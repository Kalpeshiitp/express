const http = require("http");

const express = require("express");
const bodyParser = require("body-parser");
const adminRouter = require("./routes/admin");
const shopRouter = require("./routes/shop");
const contactRouter = require("./routes/contact");
const successRouter = require("./routes/success")
const pageNotFoundRouter = require("./routes/404")
const Page404Controller = require('./controllers/404')
const path = require('path')

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname,'public')));
app.use('/admin',adminRouter);
app.use(shopRouter);
app.use(contactRouter);
app.use(successRouter);
app.use(page);

const server = http.createServer(app);
server.listen(9009);
