import { todoList, todoProps } from "@/redux/reducers/todoListReducers";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import TodoItem from "./todoItem";
import TodoItemCheckbox from "./todoItemCheckbox";

const TodoList = () => {
  const todoList: todoProps[] = useSelector<RootState, todoProps[]>(
    (state: RootState) => state.todoList.todoList
  );
  return (
    <ul>
      {todoList.map((todo) => {
        return (
          <li key={todo.id}>
            <TodoItemCheckbox itemId={todo.id} isCompleted={todo.completed} />
            <TodoItem todoTitle={todo.title} />
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
