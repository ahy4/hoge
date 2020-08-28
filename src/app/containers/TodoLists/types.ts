import { TodoList } from 'types/TodoList';

export type TodoListsState = {
  todoLists: TodoList[];
  loading: boolean;
  error?: RequestErrorCode;
};

export type RequestErrorCode = number;