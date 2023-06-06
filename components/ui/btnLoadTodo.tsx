import Button from "@mui/material/Button";

type BtnLoadTodoProps = {
  onClick: () => {};
};

const BtnLoadTodo = (props: BtnLoadTodoProps) => {
  return (
    <Button
      style={{
        backgroundColor: "#21b6ae",
      }}
      variant="contained"
      onClick={props.onClick}
    >
      Load Todo
    </Button>
  );
};

export default BtnLoadTodo;
