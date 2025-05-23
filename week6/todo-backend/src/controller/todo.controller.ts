import type { Context } from "hono";
import * as todoModel from "../model/todo.model.ts";

const GetTodo = async (c: Context) => {
  try {
    const todos = await todoModel.GetTodo()
    return c.json({
      success: true,
      data: todos,
      msg: "get todo done",
    })
  } catch (e) {
    return c.json(
      {
        success: false,
        data: null,
        msg: `Internal Server Error : ${e}`,
      },
      500
    );
  }
};

const AddTodo =  async (c: Context) => {
  try {
    const { name } = await c.req.json();
    const todos = await todoModel.AddTodo(name);
    return c.json({
      success: true,
      data: todos,
      msg: "add todo done",
    });
  } catch (e) {
    return c.json(
      {
        success: false,
        data: null,
        msg: `Internal Server Error : ${e}`,
      },
      500
    );
  }
};

const EditTodoName = async (c: Context) => {
  try {
    const { id, name } = await c.req.json();
    const todos = await todoModel.EditTodo(id, name);
    return c.json({
      success: true,
      data: todos,
      msg: "edit todo done",
    });
  } catch (e) {
    return c.json(
      {
        success: false,
        data: null,
        msg: `Internal Server Error : ${e}`,
      },
      500
    );
  }
};

const CompleteTodo = async (c: Context) => {
  try {
    const { id } = await c.req.json();
    const todos = await todoModel.SuccessTodo(id);
    return c.json({
      success: true,
      data: todos,
      msg: "complete todo done",
    });
  } catch (e) {
    return c.json(
      {
        success: false,
        data: null,
        msg: `Internal Server Error : ${e}`,
      },
      500
    );
  }
};

const DeleteTodo = async(c: Context) => {
  try {
    const { id } = await c.req.json();
    const todos = await todoModel.DeleteTodo(id);
    return c.json({
      success: true,
      data: todos,
      msg: "delete todo done",
    });
  } catch (e) {
    return c.json(
      {
        success: false,
        data: null,
        msg: `Internal Server Error : ${e}`,
      },
      500
    );
  }
};

export { GetTodo, AddTodo, EditTodoName, CompleteTodo, DeleteTodo };
