import { Action, createReducer, on } from '@ngrx/store';
import * as TodosActions from './todos.actions';

export interface State {
  readonly id: number;
  readonly title: string;
  readonly completed: boolean;
}

export const initialState: State[] = [
  {
    id: 1,
    title: 'One delectus aut autem',
    completed: false
  },
  {
    id: 2,
    title: 'Two delectus aut autem',
    completed: true
  },
  {
    id: 1,
    title: 'Three delectus aut autem',
    completed: false
  }
];

const todosReducer = createReducer(
  initialState,

  on(TodosActions.loadTodoss, state => state)
);

export function reducer(state: State[] | undefined, action: Action) {
  return todosReducer(state, action);
}
