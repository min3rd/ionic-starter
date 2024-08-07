import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ShareModule } from '../share/share.module';

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
  unsubscribeAll: Subject<any> = new Subject();
  ngOnInit(): void {

  }
  ngOnDestroy(): void {
    this.unsubscribeAll.next(null);
    this.unsubscribeAll.complete();
  }
}
