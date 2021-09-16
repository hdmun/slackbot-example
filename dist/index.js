"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var koa_1 = __importDefault(require("koa"));
var koa_router_1 = __importDefault(require("koa-router"));
var koa_bodyparser_1 = __importDefault(require("koa-bodyparser"));
var api = require('./api');
var app = new koa_1.default();
var router = new koa_router_1.default();
var port = 3000;
app.use((0, koa_bodyparser_1.default)());
router.use('/api', api.routes());
app.use(router.routes()).use(router.allowedMethods());
app.listen(port, function () {
    console.log("Koa server is listening on port " + port);
});
