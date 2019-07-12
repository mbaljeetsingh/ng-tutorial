import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { concatMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

import * as TodosActions from './todos.actions';


@Injectable()
export class TodosEffects {


  loadTodoss$ = createEffect(() => this.actions$.pipe(
    ofType(TodosActions.loadTodoss),
    /** An EMPTY observable only emits completion. Replace with your own observable API request */
    concatMap(() => EMPTY)
  ));


  constructor(private actions$: Actions) {}

}
