import type { AppBindings } from "./types"

import { OpenAPIHono } from "@hono/zod-openapi"
import { logger } from "@/middlewares/pino-logger"

export default function createApp() {
  const app = new OpenAPIHono<AppBindings>({
    strict: false,
  })

  app.use(logger())

  app.notFound(c => {
    return c.json({ code: 404, message: "Resource not found." }, 404)
  })

  app.onError((_, c) => {
    return c.json({ code: 500, message: "Internal server error." }, 500)
  })

  return app
}
