import createApp from "@/lib/create-app"
import configOpenAPI from "@/lib/config-openapi"

import index from "@/routes/index.route"

const app = createApp()
configOpenAPI(app)

const routes = [index]

routes.forEach(route => {
  app.route("/", route)
})

export default app
