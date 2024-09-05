import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs';
import { BaseComponent } from 'src/app/core/base/base.component';
import { AppsService } from 'src/app/core/services/apps/apps.service';
import { ShareModule } from 'src/app/core/share/share.module';
import { App } from 'src/app/core/services/apps/apps.types';
@Component({
  selector: 'app-apps',
  standalone: true,
  imports: [
    CommonModule,
    ShareModule,
  ],
  templateUrl: './apps.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppsComponent extends BaseComponent implements OnInit {
  apps!: App[];
  private _appsService: AppsService = inject(AppsService);
  override ngOnInit(): void {
    super.ngOnInit();

    this._appsService.apps$.pipe(takeUntil(this.unsubscribeAll)).subscribe(apps => {
      if (!apps) {
        return;
      }
      this.apps = apps;
      this.changeDetectorRef.markForCheck();
    });
  }
}
