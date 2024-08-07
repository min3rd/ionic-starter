import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent extends BaseComponent {
  layout: string = 'empty';
  override ngOnInit(): void {
    super.ngOnInit();
  }
}
