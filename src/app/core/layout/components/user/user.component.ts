import { IonAvatar } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseComponent } from 'src/app/core/base/base.component';
import { ShareModule } from 'src/app/core/share/share.module';

@Component({
  selector: 'user',
  standalone: true,
  imports: [
    CommonModule,
    ShareModule,
    IonAvatar,
  ],
  templateUrl: './user.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserComponent extends BaseComponent { }
