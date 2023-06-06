import BtnDoneTodo from "@/components/ui/btnDoneTodo";
import BtnLoadTodo from "@/components/ui/btnLoadTodo";
import LoadingText from "@/components/events/loadingText";
import NoDataLoadedText from "@/components/events/noDataLoadedText";
import TodoList from "@/components/ui/todoList";
import React, { useEffect, useRef, useState } from "react";
import useSWR from "swr";
import { todoProps } from "@/redux/reducers/todoListReducers";
import { useDispatch, useSelector } from "react-redux";
import { initItem } from "../redux/actions/todoList/todoListActions";
import { increaseItemCount } from "../redux/actions/checkBoxCounter/checkBoxCounterActions";

const HomePage = () => {
  const [isLoadDataBtnPressed, setIsLoadDataBtnPressed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loadedTodos, setLoadedTodos] = useState<todoProps[]>([]);

  const dispatch = useDispatch();

  const loadData = () => {
    setIsLoadDataBtnPressed(true);
    setIsLoading(true);
    if (loadedTodos) {
      setIsLoading(false);
    }
    return true;
  };

  const saveTodoInfoIntoStore = (todoList: todoProps[]) => {
    // const numOfCakes = useSelector((state) => state.numOfCakes);
  };

  const { data, error } = useSWR<todoProps[]>(
    "https://jsonplaceholder.typicode.com/todos",
    (url) => fetch(url).then((res) => res.json())
  );

  console.log("data:", data);
  useEffect(() => {
    console.log("inside useEffect.....");
    setIsLoading(true);
    if (data) {
      const todos: todoProps[] = [];
      for (const todo of data) {
        todo.completed = false;
        todos.push({
          ...todo,
        });
      }

      const firstTenItems = todos.slice(0, 10);
      dispatch(initItem(firstTenItems));
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
        <BtnLoadTodo onClick={loadData} /> <BtnDoneTodo />
      </div>

      <div
        style={{
          position: "absolute",
          left: "50%",
          transform: "translate(-50%)",
          marginTop: "100px",
        }}
      >
        {!isLoadDataBtnPressed ? (
          <NoDataLoadedText />
        ) : isLoading ? (
          <LoadingText />
        ) : (
          <TodoList />
        )}
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
