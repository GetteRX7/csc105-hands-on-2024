import { db } from "../index.ts";

const GetTodo = async() => {
  const todos = await db.todo.findMany();
  return todos
};

const AddTodo = async (newTodoName: string) => {
  const todos = await db.todo.create({
    data: {
      name: newTodoName,
      success: false,
    },
  });
  return todos;
};

const EditTodo = async (todoId: number, editTodoName: string) => {

  const todos = await db.todo.update({
      
      where: {
        id: todoId,
      },
      data: {
        name: editTodoName,
      },
    });
    return todos;
};

const SuccessTodo = async (todoId: number) => {

  const todos = await db.todo.update({
    where:{
      id: todoId,
    },
    data:{
      success: true,
    }
  })
  return todos;
};

const DeleteTodo = async (todoId: number) => {

  const todos = await db.todo.delete({
    where: {
      id: todoId,
    },
  })
  return todos;
};

export { GetTodo, AddTodo, EditTodo, SuccessTodo, DeleteTodo };
