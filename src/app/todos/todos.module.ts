import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodosRoutingModule } from './todos-routing.module';
import { TodosComponent } from './todos.component';
import { MaterialModule } from '../material.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TodosComponent],
  imports: [CommonModule, TodosRoutingModule, MaterialModule, FormsModule]
})
export class TodosModule {}
