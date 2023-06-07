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
import { homePageStatus } from "@/redux/reducers/homePageReducers";
import { RootState } from "@/redux/store";
import {
  enableDataBtnPressed,
  enableLoading,
  disableLoading,
} from "../redux/actions/homePage/homePageActions";

const HomePage = () => {
  const dispatch = useDispatch();
  const homePageInfo: homePageStatus = useSelector<RootState, homePageStatus>(
    (state: RootState) => state.homePageStatus
  );
  console.log("HomePageStatus----------->");
  console.log(homePageInfo);

  //   const [isLoadDataBtnPressed, setIsLoadDataBtnPressed] = useState(false);
  //   const [finishedSavingTodos, setLoadedTodos] = useState<todoProps[]>([]);

  //   const loadData = () => {
  //     setIsLoadDataBtnPressed(true);
  //     setIsLoading(true);
  //     if (finishedSavingTodos) {
  //       setIsLoading(false);
  //     }
  //     return true;
  //   };

  const { data, error } = useSWR<todoProps[]>(
    "https://jsonplaceholder.typicode.com/todos",
    (url) => fetch(url).then((res) => res.json())
  );

  console.log("data:", data);
  useEffect(() => {
    console.log("inside useEffect.....");
    // setIsLoading(true);
    dispatch(enableLoading());

    if (homePageInfo.isDataBtnPressed) {
      dispatch(enableDataBtnPressed());
      dispatch(enableLoading());
      if (homePageInfo.isTodoSavingFinished) {
        dispatch(disableLoading());
      }
    }

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
    // setIsLoading(false);
    dispatch(disableLoading());
  }, [data, homePageInfo.isDataBtnPressed]);

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
        <BtnLoadTodo /> <BtnDoneTodo />
      </div>

      <div
        style={{
          position: "absolute",
          left: "50%",
          transform: "translate(-50%)",
          marginTop: "100px",
        }}
      >
        {!homePageInfo.isDataBtnPressed ? (
          <NoDataLoadedText />
        ) : homePageInfo.isLoading ? (
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
