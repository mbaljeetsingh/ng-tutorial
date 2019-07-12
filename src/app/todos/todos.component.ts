import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../reducers';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todos$;
  constructor(private store: Store<State>) {}

  ngOnInit() {
    this.todos$ = this.store.select(state => state.todos);
  }

  onCreateTodo(todo) {
    console.log(todo.value);
  }
}
