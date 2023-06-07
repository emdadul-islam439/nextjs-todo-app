import {
  increaseItemCount,
  decreaseItemCount,
} from "@/redux/actions/checkBoxCounter/checkBoxCounterActions";
import { checkBoxCounter } from "@/redux/reducers/checkboxCounterReducers";
import { RootState } from "@/redux/store";
import Checkbox from "@mui/material/Checkbox";
import { useDispatch, useSelector } from "react-redux";

type todoItemCheckboxProps = {
  isCompleted: boolean;
  itemId: number;
};

const TodoItemCheckbox = (props: todoItemCheckboxProps) => {
  const dispatch = useDispatch();
  // const counter: checkBoxCounter = useSelector<RootState, checkBoxCounter>(
  //   (state: RootState) => state.checkboxCounter
  // );
  const { isCompleted } = props;
  let currValue = isCompleted;
  return (
    <Checkbox
      defaultChecked={isCompleted}
      onChange={() => {
        console.log(currValue);
        currValue
          ? dispatch(decreaseItemCount())
          : dispatch(increaseItemCount());

        currValue = !currValue;
      }}
    />
  );
};

export default TodoItemCheckbox;
