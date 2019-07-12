import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromTodos from '../todos/todos.reducer';

export interface State {

  todos: fromTodos.State;
}

export const reducers: ActionReducerMap<State> = {

  todos: fromTodos.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
