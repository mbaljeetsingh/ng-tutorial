import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../reducers';
import { createTodo, deleteTodo } from './todos.actions';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todos$;
  todo = {
    id: 4,
    title: 'my todo',
    completed: false
  };
  constructor(private store: Store<State>) {}

  ngOnInit() {
    this.todos$ = this.store.select(state => state.todos);
    // this.store
    //   .select(state => state.todos)
    //   .subscribe(data => {
    //     console.log(data);
    //     this.todos$ = data;
    //   });
  }

  onCreateTodo() {
    this.store.dispatch(createTodo({ payload: this.todo }));
  }

  onDelete(todo) {
    this.store.dispatch(deleteTodo({ payload: todo }));
  }
}
