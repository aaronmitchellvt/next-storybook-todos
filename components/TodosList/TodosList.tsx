import { FC } from "react";
import { TodoItemProps } from "../TodoItem/TodoItem";

export interface TodoListProps {
  todos: Array<React.FC<TodoItemProps>>;
}

const TodosList: React.FC<TodoListProps> = ({ todos }) => {
  console.log("myTodos: ", todos);

  //sort into done and not done todos
  const doneTodos = todos.map((todo: any) => {
    if (todo.props.isDone) {
      return todo;
    }
  });

  //sort into done and not done todos
  const notDoneTodos = todos.map((todo: any) => {
    if (!todo.props.isDone) {
      return todo;
    }
  });

  //*TODO - don't display not done/done if there are no items to show
  console.log("notDone: ", notDoneTodos.length);

  return (
    <div className="flex flex-col items-center w-full md:w-3/5 bg-gray-700 p-2 mt-3 sm:p-4 border-2 border-green-300 rounded">
      <div className="flex flex-col items-center w-full bg-gray-700">
        {notDoneTodos && (
          <>
            <h1 className="text-2xl text-white underline font-bold">Todos</h1>
            {notDoneTodos}
          </>
        )}
      </div>
      <div className="flex flex-col items-center w-full bg-gray-700">
        {doneTodos && (
          <>
            <h1 className="text-2xl text-white underline font-bold">Done</h1>
            {doneTodos}
          </>
        )}
      </div>
    </div>
  );
};

export default TodosList;
