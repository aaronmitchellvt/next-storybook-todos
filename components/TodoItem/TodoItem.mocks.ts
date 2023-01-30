import { TodoItemProps } from './TodoItem';

const Done: TodoItemProps = {
  name: 'Walk the dog',
  isDone: true,
  id: 1,
  importanceLevel: 1
};

const NotDone: TodoItemProps = {
  name: 'Taxes',
  isDone: false,
  id: 2,
  importanceLevel: 1
};

const LowImportance: TodoItemProps = {
  name: 'Walk the dog',
  isDone: true,
  id: 1,
  importanceLevel: 1
};

const MediumImportance: TodoItemProps = {
  name: 'Taxes',
  isDone: false,
  id: 2,
  importanceLevel: 2
};

const HighImportance: TodoItemProps = {
  name: 'Watch NBA',
  isDone: false,
  id: 2,
  importanceLevel: 3
};

export const mockTodoItemProps = {
  Done,
  NotDone,
  LowImportance,
  MediumImportance,
  HighImportance
};