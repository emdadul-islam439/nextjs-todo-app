import TodoItem from "./todoItem";
import TodoItemCheckbox from "./todoItemCheckbox";

type todoListProps = {
  todoList: {
    id: number;
    userId: number;
    title: string;
    completed: boolean;
  }[];
};

const TodoList = (props: todoListProps) => {
  const { todoList } = props;
  return (
    <ul>
      {todoList.map((todo) => {
        return (
          <li key={todo.id}>
            <TodoItemCheckbox isCompleted={todo.completed} />
            <TodoItem todoTitle={todo.title} />
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
