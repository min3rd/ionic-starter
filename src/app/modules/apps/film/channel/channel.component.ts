import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/core/base/base.component';
import { FilmService } from 'src/app/core/services/apps/film/film.service';
import { Channel } from 'src/app/core/services/apps/film/film.types';
import { ShareModule } from 'src/app/core/share/share.module';

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
export class ChannelComponent extends BaseComponent implements OnInit {
  channel!: Channel;
  private _filmService: FilmService = inject(FilmService);
  override ngOnInit(): void {
    super.ngOnInit();
    this._filmService.channel$.subscribe(channel => {
      if (!channel) return;
      this.channel = channel;
      this.changeDetectorRef.markForCheck();
    });
  }
}
