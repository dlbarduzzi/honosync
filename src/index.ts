import { serve } from "@hono/node-server"

import app from "./app"
import env from "./env"

const port = env.APP_PORT

// eslint-disable-next-line no-console
console.log(`Server is running on http://localhost:${port}`)

serve({
  fetch: app.fetch,
  port,
})
