import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseComponent } from 'src/app/core/base/base.component';
import { ShareModule } from 'src/app/core/share/share.module';
import { IonNav } from "@ionic/angular/standalone";
import { UserNavComponent } from './user-nav/user-nav.component';
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    CommonModule,
    ShareModule,
    IonNav,
  ],
  templateUrl: './user.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserComponent extends BaseComponent {
  root = UserNavComponent;
}
