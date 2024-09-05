import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/core/base/base.component';
import { ShareModule } from 'src/app/core/share/share.module';
@Component({
  selector: 'user',
  standalone: true,
  imports: [
    CommonModule,
    ShareModule,
  ],
  templateUrl: './user.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserComponent extends BaseComponent implements OnInit {
  override ngOnInit(): void {
    super.ngOnInit();
  }
}
