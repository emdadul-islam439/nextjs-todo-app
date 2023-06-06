import { checkBoxCounter } from "@/redux/reducers/checkboxCounterReducers";
import { RootState } from "@/redux/store";
import Button from "@mui/material/Button";
import { useSelector } from "react-redux";

const BtnDoneTodo = () => {
  const counter: checkBoxCounter = useSelector<RootState, checkBoxCounter>(
    (state: RootState) => state.checkboxCounter
  );

  return (
    <Button style={{}} variant="outlined">
      Done ({counter.numOfCheckedItems})
    </Button>
  );
};

export default BtnDoneTodo;
