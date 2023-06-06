type todoListProps = {
  todo: {
    todoText: string;
    isCompleted: boolean;
  }[];
};

const todoList = (props: todoListProps) => {
  const { todo } = props;
};

export default todoList;
