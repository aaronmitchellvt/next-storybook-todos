import TodoItem, { TodoItemProps } from '../TodoItem/TodoItem';
import { TodoListProps} from './TodosList';

const AllDone: TodoListProps = {
  todos: [
    <TodoItem name="Taxes" isDone={true} />,
    <TodoItem name="Walk the dogs" isDone={true} />,
    <TodoItem name="Get milk" isDone={true} />,
    <TodoItem name="Watch Hawks game" isDone={true} />,
    <TodoItem name="Cook dinner" isDone={true} />,
  ]
}

const NotDone: TodoListProps = {
  todos: [
    <TodoItem name="Taxes" isDone={false} />,
    <TodoItem name="Walk the dogs" isDone={false} />,
    <TodoItem name="Get milk" isDone={false} />,
    <TodoItem name="Watch Hawks game" isDone={false} />,
    <TodoItem name="Cook dinner" isDone={false} />,
  ]
};

const SomeDone: TodoListProps = {
  todos: [
    <TodoItem name="Taxes" isDone={false} />,
    <TodoItem name="Walk the dogs" isDone={true} />,
    <TodoItem name="Get milk" isDone={false} />,
    <TodoItem name="Watch Hawks game" isDone={true} />,
    <TodoItem name="Cook dinner" isDone={true} />,
  ]
};

const NoTodos: TodoListProps = {
  todos: []
};

export const mockTodoListProps = {
  AllDone,
  NotDone,
  SomeDone,
  NoTodos
};