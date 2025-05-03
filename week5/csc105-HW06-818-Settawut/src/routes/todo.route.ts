import { Hono } from "hono";
import * as todoController from "../controllers/todo.controller.js";

const todoRouter = new Hono();

todoRouter.post("/", todoController.createTodo);
todoRouter.get("/", todoController.getTodo);
todoRouter.get("/user/:userId", todoController.getTodosByUserId);
todoRouter.patch("/:id/complete", todoController.updateTodoComplete);
todoRouter.patch("/:id/title", todoController.updateTodoTitle);

export { todoRouter };
