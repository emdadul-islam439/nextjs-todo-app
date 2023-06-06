type todoItemProps = {
  todoTitle: string;
};

const TodoItem = (props: todoItemProps) => {
  const { todoTitle: todotitle } = props;
  return <span> {todotitle} </span>;
};

export default TodoItem;
