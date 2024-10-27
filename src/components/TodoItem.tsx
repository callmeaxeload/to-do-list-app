import React from 'react';

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoItemProps {
  task: Task;
  deleteTask: (id: number) => void;
  toggleComplete: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  task,
  deleteTask,
  toggleComplete,
}) => {
  return (
    <li
      className={`list-group-item d-flex justify-content-between align-items-center ${
        task.completed ? 'list-group-item-success' : ''
      }`}>
      <input
        className="form-check-input me-2"
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleComplete(task.id)}
      />
      <span
        style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.text}
      </span>

      <button
        className="btn btn-danger btn-sm"
        onClick={() => deleteTask(task.id)}>
        X
      </button>
    </li>
  );
};

export default TodoItem;
