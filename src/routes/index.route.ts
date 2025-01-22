import { createRouter } from "@/lib/create-app"
import { createRoute, z } from "@hono/zod-openapi"

const router = createRouter().openapi(
  createRoute({
    tags: ["Index"],
    path: "/",
    method: "get",
    responses: {
      200: {
        content: {
          "application/json": {
            schema: z.object({ message: z.string() }),
          },
        },
        description: "Honosync API Index",
      },
    },
  }),
  c => {
    return c.json({ message: "Honosync API" }, 200)
  },
)

export default router
