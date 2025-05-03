import { Hono } from "hono";
import * as todoController from "../controller/todo.controller.ts"
import { todo } from "node:test";

const todoRouter = new Hono();

todoRouter.get('/' , todoController.GetTodo)
todoRouter.post('/add', todoController.AddTodo)
todoRouter.patch('/edit', todoController.EditTodoName)
todoRouter.patch('/success', todoController.CompleteTodo)
todoRouter.delete('/delete', todoController.DeleteTodo);

todoRouter.get("/test", (c) => c.text("Hello From Todo Router"));


export { todoRouter };
