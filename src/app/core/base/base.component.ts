import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ShareModule } from '../share/share.module';
import { ActivatedRoute, Router } from '@angular/router';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-base',
  standalone: true,
  imports: [
    CommonModule,
    ShareModule,
  ],
  templateUrl: './base.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BaseComponent implements OnInit, OnDestroy {
  form!: UntypedFormGroup;
  formBuilder: UntypedFormBuilder = inject(UntypedFormBuilder);
  activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  router: Router = inject(Router);
  changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
  unsubscribeAll: Subject<any> = new Subject();
  ngOnInit(): void {

  }
  ngOnDestroy(): void {
    this.unsubscribeAll.next(null);
    this.unsubscribeAll.complete();
  }
}
