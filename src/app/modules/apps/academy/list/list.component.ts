import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { takeUntil } from 'rxjs';
import { BaseComponent } from 'src/app/core/base/base.component';
import { AcademyService } from 'src/app/core/services/apps/academy/academy.service';
import { Course } from 'src/app/core/services/apps/academy/academy.types';
import { ShareModule } from 'src/app/core/share/share.module';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    CommonModule,
    ShareModule,
  ],
  templateUrl: './list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent extends BaseComponent {
  courses!: Course[];
  private _academyService: AcademyService = inject(AcademyService);
  override ngOnInit(): void {
    super.ngOnInit();
    this._academyService.courses$.pipe(takeUntil(this.unsubscribeAll)).subscribe(courses => {
      if (!courses) {
        return;
      }
      this.courses = courses;
      this.changeDetectorRef.markForCheck();
    });
  }
}
