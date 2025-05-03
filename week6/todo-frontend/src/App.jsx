import { useEffect, useState } from 'react'
import './App.css'
import { getTodoAPI } from './api/getTodo';
import { addTodoAPI } from './api/addTodo';
import { editTodoNameAPI, toggleTodoSuccessAPI } from './api/editTodo';
import { deleteTodoAPI } from './api/deleteTodo';

const Todo = [
  { id: 1, name: 'Learn Frontend', success: false },
  { id: 2, name: 'Learn Backend', success: false },
];

function App() {
  const [todos, setTodos] = useState(Todo);

  async function handleFetchTodoData() {
    try {
      const resp = await getTodoAPI();
      if (resp.success && resp.data !== null) {
        setTodos(resp.data);
      }
    } catch (error) {
      console.error('Failed to fetch todos:', error);
    }
  }

  async function handleAdd() {
    const name = prompt('Enter todo name');
    if (!name) return;
    const resp = await addTodoAPI(name);
    if (resp?.success) {
      setTodos([...todos, resp.data]);
    }
  }

  async function handleEditName(id) {
    const newName = prompt('Enter new name');
    if (!newName) return;
    const resp = await editTodoNameAPI(id, newName);
    if (resp?.success) {
      setTodos(todos.map(todo =>
        todo.id === id ? resp.data : todo
      ));
    }
  }

  async function handleEditSuccess(id) {
    const resp = await toggleTodoSuccessAPI(id);
    if (resp?.success) {
      setTodos(todos.map(todo =>
        todo.id === id ? resp.data : todo
      ));
    }
  }

  async function handleDelete(id) {
    const resp = await deleteTodoAPI(id);
    if (resp?.success) {
      setTodos(todos.filter(todo => todo.id !== id));
    }
  }

  useEffect(() => {
    handleFetchTodoData();
  }, []);

  return (
    <>
      <div className='w-screen h-screen bg-cyan-200 flex justify-center items-center'>
        <div className='flex flex-col gap-10 w-dvh'>
          <button className="bg-blue-500 text-white shadow-2xs px-4 py-2 rounded-2xl cursor-pointer" onClick={handleAdd}>
            Add Todo
          </button>

          {todos.map((todo) => (
            <div key={todo.id} className="bg-white p-4 rounded shadow flex flex-col gap-2">
              <h1 className="text-xl">{todo.name}</h1>
              <h2 className="text-gray-600">{todo.success ? 'Done' : 'Not Done'}</h2>

              <div className="flex gap-2">
                <button
                  className=" text-black bg-yellow-300 px-3 py-1 rounded cursor-pointer"
                  onClick={() => handleEditName(todo.id)}
                >
                  Edit Name
                </button>
                <button
                  className="text-black bg-green-300 px-3 py-1 rounded cursor-pointer"
                  onClick={() => handleEditSuccess(todo.id)}
                >
                  Complete
                </button>
                <button
                  className="text-black bg-red-300 px-3 py-1 rounded cursor-pointer"
                  onClick={() => handleDelete(todo.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default App;
