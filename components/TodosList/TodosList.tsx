
export interface TodosListProps {
  todos: any;
}

const TodosList: React.FC<TodosListProps> = ({ todos }) => {
  console.log("todos: ", todos);

  return (
  <div className="bg-green-700">
    My Todos
  </div>
  );
};

export default TodosList;