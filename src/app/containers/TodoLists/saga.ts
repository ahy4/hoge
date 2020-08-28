import { call, put, select, takeLatest, delay } from 'redux-saga/effects';
import graphql from 'utils/request-graphql';
import { actions } from './slice';
import { TodoList } from 'types/TodoList';

export function* getTodoLists() {
  const query = `
    query {
      getTodoList(todoListId: 1) {
        todoListId
        name
        createdAt
        updatedAt
      }
    }
  `;
  try {
    const todoLists: TodoList[] | null = yield call(graphql, query);
    if (!todoLists) {
      return yield put(actions.requestFailed(1));
    }
    yield put(actions.todoListsLoaded(todoLists));
  } catch (err) {
    actions.requestFailed(2);
  }
}

export function* todoListsSaga() {
  yield takeLatest(actions.loadTodoLists.type, getTodoLists);
}