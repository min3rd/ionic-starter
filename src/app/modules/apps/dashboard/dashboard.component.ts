import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/core/base/base.component';
import { ShareModule } from 'src/app/core/share/share.module';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    ShareModule,
  ],
  templateUrl: './dashboard.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent extends BaseComponent implements OnInit {
  counter: number = 59;
  override ngOnInit(): void {
    super.ngOnInit();
  }
}
