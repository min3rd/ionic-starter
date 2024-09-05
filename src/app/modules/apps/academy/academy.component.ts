import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs';
import { BaseComponent } from 'src/app/core/base/base.component';
import { AcademyService } from 'src/app/core/services/apps/academy/academy.service';
import { CourseCategory } from 'src/app/core/services/apps/academy/academy.types';
import { ShareModule } from 'src/app/core/share/share.module';
import { getParam } from 'src/app/core/utils/functions';

@Component({
  selector: 'app-academy',
  standalone: true,
  imports: [
    CommonModule,
    ShareModule,
  ],
  templateUrl: './academy.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AcademyComponent extends BaseComponent implements OnInit {
  onSearch: boolean = false;
  categories!: CourseCategory[];
  category!: string;
  private _academyService: AcademyService = inject(AcademyService);
  override ngOnInit(): void {
    super.ngOnInit();
    this._academyService.courseCategories$.pipe(takeUntil(this.unsubscribeAll)).subscribe(categories => {
      if (!categories) {
        return;
      }
      this.categories = categories;
      this.changeDetectorRef.markForCheck();
    });
    this.category = getParam(this.activatedRoute.snapshot, 'categoryCourse');
  }
}
