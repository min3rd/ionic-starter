import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapitalizePipe } from './capitalize.pipe';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CapitalizePipe,
  ],
  exports: [
    CapitalizePipe,
  ]
})
export class PipeModule { }
