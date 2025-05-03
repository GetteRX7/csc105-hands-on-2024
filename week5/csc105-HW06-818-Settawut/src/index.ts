import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { PrismaClient } from "./generated/prisma/index.js";
import { mainRouter } from "./routes/index.route.js";

const app = new Hono();
export const db = new PrismaClient();

app.get("/", (c) => c.text("Hello Hono!"));
app.route("", mainRouter);

db.$connect()
  .then(() => console.log("Connected to the database"))
  .catch((err) => console.error("DB connection error:", err));

serve(
  { fetch: app.fetch, port: Number(process.env.PORT) || 3001 },
  (info) => console.log(`Server is running on http://localhost:${info.port}`)
);
