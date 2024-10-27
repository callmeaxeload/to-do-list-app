import React from 'react';
import TodoItem from './TodoItem';

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoListProps {
  tasks: Task[];
  deleteTask: (id: number) => void;
  toggleComplete: (id: number) => void
}

const TodoList: React.FC<TodoListProps> = ({ tasks, deleteTask, toggleComplete }) => {
  return (
    <ul className='list-group '>
      {tasks.map((task) => (
        <TodoItem key={task.id} task={task} deleteTask={deleteTask} toggleComplete={toggleComplete}/>
      ))}
    </ul>
  );
};

export default TodoList;
