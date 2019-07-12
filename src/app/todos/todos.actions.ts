import { createAction, props } from '@ngrx/store';
import { State } from './todos.reducer';

export const loadTodos = createAction('[Todos] Load Todos');
export const createTodo = createAction(
  '[Todos] Create Todo',
  props<{ payload: State }>()
);
