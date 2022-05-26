const Koa = require("koa");
// const BodyParser = require("koa-bodyparser");
// const Logger = require("koa-logger");
// const cors = require('koa-cors');
// const serve = require("koa-static");
// const mount = require("koa-mount");


const app = new Koa();

const PORT = process.env.PORT || 3000;

// app.use(BodyParser());
// app.use(Logger());
// app.use(cors());

const api = require('./routes/api.js')
const router = api.router

app.use(router.routes(), router.allowedMethods())

app.listen(PORT, function () {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/", PORT, PORT);
});