import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
@NgModule({
  declarations: [],
  imports: [CommonModule, MatListModule, MatInputModule, MatButtonModule],
  exports: [MatListModule, MatInputModule, MatButtonModule]
})
export class MaterialModule {}
