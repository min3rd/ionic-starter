import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapitalizePipe } from './capitalize.pipe';
import { AbbreviatePipe } from './abbreviate.pipe';
import { UploadTimePipe } from './upload-time.pipe';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CapitalizePipe,
    AbbreviatePipe,
    UploadTimePipe,
  ],
  exports: [
    CapitalizePipe,
    AbbreviatePipe,
    UploadTimePipe,
  ]
})
export class PipeModule { }
