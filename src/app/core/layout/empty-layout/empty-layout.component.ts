import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
@Component({
  selector: 'empty-layout',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './empty-layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmptyLayoutComponent { }
