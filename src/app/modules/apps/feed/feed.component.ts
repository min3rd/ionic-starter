import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/core/base/base.component';
import { ShareModule } from 'src/app/core/share/share.module';

@Component({
  selector: 'app-feed',
  standalone: true,
  imports: [
    CommonModule,
    ShareModule,
  ],
  templateUrl: './feed.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeedComponent extends BaseComponent implements OnInit {
}
