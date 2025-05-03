import { db } from "../index.js";

const createTodo = async (title: string, userId: number) => {
    const todo = await db.todo.create({
        data: {
            title: title,
            userId: userId,
        },
    });
    return todo;
}

const getTodo = async (id: number) => {
    const todo = await db.todo.findUnique({
         where: {
            id: id,
        },
        include: {
            user: true, 
        },
    });
    return todo;
}

const getTodosByUserId = async (userId: number) => {
    return await db.todo.findMany({
        where: { userId },
    });
}

const updateTodoComplete = async (id: number) => {
    return await db.todo.update({
        where: { id },
        data: { completed: true },
    });
}

const updateTodoTitle = async (id: number, title: string) => {
    return await db.todo.update({
        where: { id },
        data: { title },
    });
}

export { createTodo, getTodo, getTodosByUserId, updateTodoComplete, updateTodoTitle };
