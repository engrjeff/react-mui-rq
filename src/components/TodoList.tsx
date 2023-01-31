import { useTodos } from './todo-hooks';

function TodoList() {
  const todos = useTodos();

  if (todos.isLoading) return <p>Loading todos...</p>;

  return (
    <div>
      <ul>
        {todos.data?.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
