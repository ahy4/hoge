import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { TodoListsState as ContainerState, RequestErrorCode } from './types';
import { TodoList } from 'types/TodoList';

export const initialState: ContainerState = {
  todoLists: [],
  loading: false,
  error: undefined,
};

const todoListSlice = createSlice({
  name: 'todoLists',
  initialState,
  reducers: {
    loadTodoLists: (state) => {
      state.loading = true;
      state.todoLists = [];
      state.error = undefined;
    },
    todoListsLoaded: (state, action: PayloadAction<TodoList[]>) => {
      state.loading = false;
      state.todoLists = action.payload;
    },
    requestFailed: (state, action: PayloadAction<RequestErrorCode>) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { actions, reducer, name: sliceKey } = todoListSlice;