import Checkbox from "@mui/material/Checkbox";

type todoItemCheckboxProps = {
  isCompleted: boolean;
};

const todoItemCheckbox = (props: todoItemCheckboxProps) => {
  const { isCompleted } = props;
  return <Checkbox defaultChecked={isCompleted} />;
};

export default todoItemCheckbox;
