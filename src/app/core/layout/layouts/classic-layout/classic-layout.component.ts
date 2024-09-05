import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../../base/base.component';
import { ShareModule } from '../../../share/share.module';
import { IonApp, IonHeader, IonRouterOutlet, IonToolbar, IonTitle } from "@ionic/angular/standalone";
import { UserComponent } from '../../components/user/user.component';

@Component({
  selector: 'classic-layout',
  standalone: true,
  imports: [
    CommonModule,
    ShareModule,
    IonApp,
    IonHeader,
    IonRouterOutlet,
    IonToolbar,
    IonTitle,
    UserComponent,
  ],
  templateUrl: './classic-layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClassicLayoutComponent extends BaseComponent implements OnInit {
  title!: string;
  override ngOnInit(): void {
    super.ngOnInit();
    this.activatedRoute.data.subscribe(data => {
      if (!data || !data['title']) {
        return;
      }
      this.title = data['title'];
      this.changeDetectorRef.markForCheck();
    });
  }
}
