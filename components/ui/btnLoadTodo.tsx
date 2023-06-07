import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { enableDataBtnPressed } from "../../redux/actions/homePage/homePageActions";

const BtnLoadTodo = () => {
  const dispatch = useDispatch();
  return (
    <Button
      style={{
        backgroundColor: "#21b6ae",
      }}
      variant="contained"
      //   onClick={props.onClick}
      onClick={() => dispatch(enableDataBtnPressed())}
    >
      Load Todo
    </Button>
  );
};

export default BtnLoadTodo;
