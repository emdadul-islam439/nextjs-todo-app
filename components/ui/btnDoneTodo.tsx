import Button from "@mui/material/Button";

type BtnDoneTodoProps = {
  completedTodoCount: number;
};

const BtnDoneTodo = (props: BtnDoneTodoProps) => {
  const { completedTodoCount } = props;
  return (
    <Button style={{}} variant="outlined">
      Done ({completedTodoCount})
    </Button>
  );
};

export default BtnDoneTodo;
