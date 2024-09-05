import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseComponent } from 'src/app/core/base/base.component';
import { ShareModule } from 'src/app/core/share/share.module';
import { addIcons } from "ionicons";

@Component({
  selector: 'app-channel',
  standalone: true,
  imports: [
    CommonModule,
    ShareModule,
  ],
  templateUrl: './channel.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChannelComponent extends BaseComponent { }
