import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodosRoutingModule } from './todos-routing.module';
import { TodosComponent } from './todos.component';
import { MaterialModule } from '../material.module';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import * as fromTodos from './todos.reducer';
import { EffectsModule } from '@ngrx/effects';
import { TodosEffects } from './todos.effects';

@NgModule({
  declarations: [TodosComponent],
  imports: [CommonModule, TodosRoutingModule, MaterialModule, FormsModule, StoreModule.forFeature('todos', fromTodos.reducer), EffectsModule.forFeature([TodosEffects])]
})
export class TodosModule {}
