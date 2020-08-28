import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.todoLists ?? initialState;

export const selectTodoLists = createSelector(
  [selectDomain],
  todoListsState => todoListsState.todoLists,
);

export const selectLoading = createSelector(
  [selectDomain],
  todoListsState => todoListsState.loading,
);

export const selectError = createSelector(
  [selectDomain],
  todoListsState => todoListsState.error,
);