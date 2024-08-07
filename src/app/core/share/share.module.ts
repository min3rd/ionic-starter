import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoModule } from '@jsverse/transloco';
import { PipeModule } from '../pipe/pipe.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TranslocoModule,
    PipeModule,
  ],
  exports: [
    TranslocoModule,
    PipeModule,
  ]
})
export class ShareModule { }
