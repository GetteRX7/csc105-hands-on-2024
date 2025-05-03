import type { Context } from "hono";
import * as todoModel from "../models/todo.model.js";

type createTodoBody = {
    title: string;
    userId: number;
};

const createTodo = async (c: Context) => {
    try {
        const body = await c.req.json<createTodoBody>();
        if (!body.title || !body.userId)
            return c.json(
                {
                    success: false,
                    data: null,
                    msg: "Missing required fields",
                },
                400
            );
        const newTodo = await todoModel.createTodo(body.title, body.userId);
        return c.json({
            success: true,
            data: newTodo,
            msg: "Created new Todo!",
        });
    } catch (e) {
        return c.json(
            {
                success: false,
                data: null,
                msg: `${e}`,
            },
            500
        );
    }
};

const getTodo = async (c: Context) => {
    try {
        const param = c.req.query("id");
        if (param !== undefined && param !== null) {
            const data = await todoModel.getTodo(parseInt(param));
            return c.json(data, 200);
        }
        return c.json(
            {
                success: false,
                data: null,
                msg: "Missing required fields",
            },
            400
        );
    } catch (e) {
        return c.json(
            {
                success: false,
                data: null,
                msg: `${e}`,
            },
            500
        );
    }
};

const getTodosByUserId = async (c: Context) => {
    try {
        const userId = parseInt(c.req.param("userId"));
        if (!userId) {
            return c.json(
                {
                    success: false,
                    data: null,
                    msg: "Missing user ID",
                },
                400
            );
        }
        const todos = await todoModel.getTodosByUserId(userId);
        return c.json({ success: true, data: todos });
    } catch (e) {
        return c.json(
            {
                success: false,
                data: null,
                msg: `${e}`,
            },
            500
        );
    }
};

const updateTodoComplete = async (c: Context) => {
    try {
        const todoId = parseInt(c.req.param("id"));
        if (!todoId) {
            return c.json(
                {
                    success: false,
                    data: null,
                    msg: "Missing todo ID",
                },
                400
            );
        }
        const updatedTodo = await todoModel.updateTodoComplete(todoId);
        return c.json({ success: true, data: updatedTodo });
    } catch (e) {
        return c.json(
            {
                success: false,
                data: null,
                msg: `${e}`,
            },
            500
        );
    }
};


const updateTodoTitle = async (c: Context) => {
    try {
        const todoId = parseInt(c.req.param("id"));
        const body = await c.req.json<{ title: string }>();
        if (!body.title) {
            return c.json(
                {
                    success: false,
                    data: null,
                    msg: "Missing title field",
                },
                400
            );
        }
        const updatedTodo = await todoModel.updateTodoTitle(todoId, body.title);
        return c.json({ success: true, data: updatedTodo });
    } catch (e) {
        return c.json(
            {
                success: false,
                data: null,
                msg: `${e}`,
            },
            500
        );
    }
};

export { createTodo, getTodo, getTodosByUserId, updateTodoComplete, updateTodoTitle };
