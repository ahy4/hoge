import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { sliceKey, reducer, actions } from './slice';
import { todoListsSaga } from './saga';
import {
  selectTodoLists,
  selectLoading,
  selectError,
} from './selectors';

export function TodoLists() {
  useInjectReducer({ key: sliceKey, reducer });
  useInjectSaga({ key: sliceKey, saga: todoListsSaga });

  const todoLists = useSelector(selectTodoLists);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  const useEffectOnMount = (effect: React.EffectCallback) => {
    useEffect(effect, []);
  };
  useEffectOnMount(() => {
    dispatch(actions.loadTodoLists());
  });

  return (
    <p>
      {JSON.stringify(todoLists)}
    </p>
  );
};
// export function TodoList() {
//   return (
//     <>
//       <p>hello world from todo list</p>
//     </>
//   );
// }