import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseComponent } from 'src/app/core/base/base.component';
import { emojisData } from 'src/app/core/mock-api/apps/feed/data';
import { ShareModule } from 'src/app/core/share/share.module';

@Component({
  selector: 'app-more-emoji',
  standalone: true,
  imports: [
    CommonModule,
    ShareModule,
  ],
  templateUrl: './more-emoji.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MoreEmojiComponent extends BaseComponent {
  emojis = emojisData;
}
