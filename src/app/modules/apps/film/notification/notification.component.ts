import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { takeUntil } from 'rxjs';
import { BaseComponent } from 'src/app/core/base/base.component';
import { FilmService } from 'src/app/core/services/apps/film/film.service';
import { Notification } from 'src/app/core/services/apps/film/film.types';
import { ShareModule } from 'src/app/core/share/share.module';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [
    CommonModule,
    ShareModule,
  ],
  templateUrl: './notification.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotificationComponent extends BaseComponent {
  notifications!: Notification[];
  private _filmService: FilmService = inject(FilmService);
  override ngOnInit(): void {
    super.ngOnInit();
    this._filmService.notifications$.pipe(takeUntil(this.unsubscribeAll)).subscribe(notifications => {
      if (!notifications) {
        return;
      }
      this.notifications = notifications;
      this.changeDetectorRef.markForCheck();
    });
  }
}
