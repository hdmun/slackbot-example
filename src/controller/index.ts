import { Context } from 'koa'
import Router from 'koa-router'
import { Container } from 'typedi'

import { SlackService } from '../service'


const router = new Router()

router.post('/slack/events', async (ctx: Context) => {
    const body = ctx.request.body
    const event = body.event

    switch (body.type) {
        case 'event_callback':
            const slackService = Container.get(SlackService)
            await slackService.event_callback(event)
            ctx.status = 200
            break
        case 'url_verification':
            console.log('url verification')  // Enable Events 등록할 때 필요하다
            ctx.body = body.challenge
            break
        default:
            ctx.status = 200
            break
    }
})

export default router
