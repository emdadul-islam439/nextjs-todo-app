import Button from "@mui/material/Button";

// type BtnLoadTodoProps = {
//   completedTodoCount: number;
// };

const BtnLoadTodo = () => {
  return (
    <Button
      style={{
        backgroundColor: "#21b6ae",
      }}
      variant="contained"
    >
      Load Todo
    </Button>
  );
};

export default BtnLoadTodo;
