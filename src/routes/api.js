const HttpStatus = require("http-status");
const Router = require('koa-router')

const router = new Router();

router.get("/book",async (ctx,next)=>{
    const books = ["Speaking javascript", "Fluent Python", "Pro Python", "The Go programming language"];
    ctx.status = HttpStatus.OK;
    ctx.body = books;
    await next();
  });

exports.router = router