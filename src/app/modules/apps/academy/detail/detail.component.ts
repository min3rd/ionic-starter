import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/core/base/base.component';
import { AcademyService } from 'src/app/core/services/apps/academy/academy.service';
import { Course, Step } from 'src/app/core/services/apps/academy/academy.types';
import { ShareModule } from 'src/app/core/share/share.module';
import { MenuController } from "@ionic/angular/standalone";
import { from, takeUntil } from 'rxjs';
@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [
    CommonModule,
    ShareModule,
  ],
  templateUrl: './detail.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailComponent extends BaseComponent implements OnInit {
  course!: Course;
  steps!: Step[];
  currentStep!: number;
  private _academyService: AcademyService = inject(AcademyService);
  menuController: MenuController = inject(MenuController);
  override ngOnInit(): void {
    super.ngOnInit();
    this._academyService.course$.subscribe(course => {
      if (!course) {
        return;
      }
      this.course = course;
    });
    this._academyService.steps$.subscribe(steps => {
      if (!steps) {
        return;
      }
      this.steps = steps;
    });
    this.activatedRoute.params.subscribe(params => {
      this.currentStep = +params['step'];
    });
    from(this.menuController.close()).pipe(takeUntil(this.unsubscribeAll)).subscribe(result => {
    });
  }
}
