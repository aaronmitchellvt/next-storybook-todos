import { TodoItemProps } from './TodoItem';

const Done: TodoItemProps = {
  name: 'Walk the dog',
  isDone: true,
  id: 1
};

const NotDone: TodoItemProps = {
  name: 'Taxes',
  isDone: false,
  id: 2
};

export const mockTodoItemProps = {
  Done,
  NotDone,
  id: 3
};