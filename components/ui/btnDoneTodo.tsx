import Button from "@mui/material/Button";

type BtnDoneTodoProps = {
  completedTodoCount: number;
};

const BtnDoneTodo = (props: BtnDoneTodoProps) => {
  const { completedTodoCount } = props;
  return <Button variant="outlined">Done ({completedTodoCount})</Button>;
};

export default BtnDoneTodo;
