import { useState } from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (newTask: string) => {
    setTasks([
      ...tasks,
      { id: tasks.length + 1, text: newTask, completed: false },
    ]);
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleComplete = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteAllTasks = () => {
    setTasks([]);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4"> Todo List App</h1>
      <AddTodo addTodo={addTask} />
      <TodoList
        tasks={tasks}
        deleteTask={deleteTask}
        toggleComplete={toggleComplete}
      />
      {tasks.length > 0 && (
        <button className="btn btn-danger mt-4" onClick={deleteAllTasks}>
          Delete All Tasks
        </button>
      )}
    </div>
  );
}

export default App;
