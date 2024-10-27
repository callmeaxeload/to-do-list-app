import React, { useState } from 'react';

interface AddTodoProps {
  addTodo: (task: string) => void;
}

const AddTodo: React.FC<AddTodoProps> = ({ addTodo }) => {
  const [task, setTask] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (task.trim()) {
      addTodo(task);
      setTask('');
    }
  };
  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="input-group">
        <input className='form-control'
          type="text"
          value={task}
          onChange={handleChange}
          placeholder="Add a new task"
        />
        <button type="submit" className="btn btn-primary">Add Task</button>
      </div>
    </form>
  );
};

export default AddTodo;
