import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs';
import { BaseComponent } from 'src/app/core/base/base.component';
import { FilmService } from 'src/app/core/services/apps/film/film.service';
import { Notification } from 'src/app/core/services/apps/film/film.types';
import { ShareModule } from 'src/app/core/share/share.module';
import { ActionSheetButton } from "@ionic/angular/standalone";
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
export class NotificationComponent extends BaseComponent implements OnInit {
  notifications!: Notification[];
  private _filmService: FilmService = inject(FilmService);
  actionSheetButtons!: ActionSheetButton[];
  override ngOnInit(): void {
    super.ngOnInit();
    this.actionSheetButtons = [
      {
        id: 'hide-this-notification',
        text: 'Hide this notification',
        icon: 'eye-off',
      },
      {
        id: 'turn-off-notifications',
        text: 'Turn off notifications',
        icon: 'notifications-off',
      }
    ];
    this._filmService.notifications$.pipe(takeUntil(this.unsubscribeAll)).subscribe(notifications => {
      if (!notifications) {
        return;
      }
      this.notifications = notifications;
      this.changeDetectorRef.markForCheck();
    });
  }
}
