import Button from "@mui/material/Button";

type BtnLoadTodoProps = {
  completedTodoCount: number;
};

const BtnLoadTodo = (props: BtnLoadTodoProps) => {
  const { completedTodoCount } = props;
  return <Button variant="contained">Load Todo</Button>;
};

export default BtnLoadTodo;
