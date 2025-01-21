import type { PinoLogger } from "hono-pino"

import { OpenAPIHono } from "@hono/zod-openapi"

import { logger } from "middlewares/pino-logger"

type AppBindings = {
  Variables: {
    logger: PinoLogger
  }
}

const app = new OpenAPIHono<AppBindings>()
app.use(logger())

app.get("/", c => {
  c.var.logger.info("trying out pino logger middleware")
  return c.text("Hello Hono!")
})

app.notFound(c => {
  return c.json({ code: 404, message: "Resource not found." }, 404)
})

app.onError((_, c) => {
  return c.json({ code: 500, message: "Internal server error." }, 500)
})

export default app
