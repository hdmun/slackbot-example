"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var koa_router_1 = __importDefault(require("koa-router"));
var typedi_1 = require("typedi");
var service_1 = require("../service");
var api = new koa_router_1.default();
api.post('/slack/events', function (ctx) {
    var body = ctx.request.body;
    var event = body.event;
    switch (body.type) {
        case 'event_callback':
            var slackService = typedi_1.Container.get(service_1.SlackService);
            slackService.event_callback(event);
            break;
        case 'url_verification':
            //url 검증
            console.log('url verification');
            ctx.body = body.challenge;
            break;
        default:
            break;
    }
});
exports.default = api;
