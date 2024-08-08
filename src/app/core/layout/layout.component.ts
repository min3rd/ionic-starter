import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { ShareModule } from '../share/share.module';
import { EmptyLayoutComponent } from './layouts/empty-layout/empty-layout.component';
import { ClassicLayoutComponent } from './layouts/classic-layout/classic-layout.component';
@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    CommonModule,
    ShareModule,
    EmptyLayoutComponent,
    ClassicLayoutComponent,
  ],
  templateUrl: './layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent extends BaseComponent {
  layout: string | 'empty' | 'classic' = 'empty';
  override ngOnInit(): void {
    super.ngOnInit();
    this.activatedRoute.data.subscribe(data => {
      if (!data || !data['layout']) {
        return;
      }
      this.layout = data['layout'];
      this.changeDetectorRef.markForCheck();
    });
  }
}
