import Checkbox from "@mui/material/Checkbox";

type todoItemCheckboxProps = {
  isCompleted: boolean;
};

const TodoItemCheckbox = (props: todoItemCheckboxProps) => {
  const { isCompleted } = props;
  return <Checkbox defaultChecked={isCompleted} />;
};

export default TodoItemCheckbox;
