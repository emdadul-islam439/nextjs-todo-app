import BtnDoneTodo from "@/components/ui/btnDoneTodo";
import BtnLoadTodo from "@/components/ui/btnLoadTodo";
import LoadingText from "@/components/ui/loadingText";
import TodoList from "@/components/ui/todoList";
import React, { useEffect, useState } from "react";
import useSWR from "swr";

type todoProps = {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
};

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedTodos, setLoadedTodos] = useState<todoProps[]>([]);

  const { data, error } = useSWR<todoProps[]>(
    "https://jsonplaceholder.typicode.com/todos",
    (url) => fetch(url).then((res) => res.json())
  );

  console.log("data:", data);
  useEffect(() => {
    setIsLoading(true);
    if (data) {
      const todos: todoProps[] = [];
      for (const todo of data) {
        todos.push({
          ...todo,
        });
      }
      setLoadedTodos(todos.slice(0, 10));
    }
    setIsLoading(false);
  }, [data]);

  return (
    <React.Fragment>
      <div
        style={{
          position: "absolute",
          left: "50%",
          transform: "translate(-50%)",
          marginTop: "20px",
        }}
      >
        <BtnLoadTodo /> <BtnDoneTodo completedTodoCount={4} />
      </div>

      <div
        style={{
          position: "absolute",
          left: "50%",
          transform: "translate(-50%)",
          marginTop: "100px",
        }}
      >
        {isLoading ? <LoadingText /> : <TodoList todoList={loadedTodos} />}
      </div>
    </React.Fragment>
  );
};

export default HomePage;

// const nameList = [
//   {
//     id: 1,
//     todoText: "todo 1  111",
//     isCompleted: true,
//   },
//   {
//     id: 2,
//     todoText: "todo 1 klalkf",
//     isCompleted: true,
//   },
//   {
//     id: 3,
//     todoText: "todo 1  111",
//     isCompleted: false,
//   },
//   {
//     id: 4,
//     todoText: "todo 1 alkfklalf 111",
//     isCompleted: true,
//   },
// ];
