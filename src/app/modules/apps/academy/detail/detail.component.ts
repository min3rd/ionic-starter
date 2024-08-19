import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { BaseComponent } from 'src/app/core/base/base.component';
import { AcademyService } from 'src/app/core/services/apps/academy/academy.service';
import { Course, Step } from 'src/app/core/services/apps/academy/academy.types';
import { ShareModule } from 'src/app/core/share/share.module';

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
export class DetailComponent extends BaseComponent {
  course!: Course;
  steps!: Step[];
  private _academyService: AcademyService = inject(AcademyService);
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
  }
  read(offset: number) {
    if (!this.course.progress) {
      this.course.progress = {
        currentStep: 0,
      };
    }
    if (this.course.progress.currentStep == undefined) {
      this.course.progress.currentStep = 0;
    }
    this.course.progress.currentStep += offset
  }
}
