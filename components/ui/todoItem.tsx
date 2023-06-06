type todoItemProps = {
  todoText: string;
};

const todoItem = (props: todoItemProps) => {
  const { todoText } = props;
  return <span> {todoText} </span>;
};

export default todoItem;
