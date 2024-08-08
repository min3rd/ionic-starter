import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IonRouterOutlet, IonApp } from "@ionic/angular/standalone";
import { BaseComponent } from '../../../base/base.component';
import { ShareModule } from '../../../share/share.module';

@Component({
  selector: 'empty-layout',
  standalone: true,
  imports: [
    CommonModule,
    ShareModule,
    IonApp,
    IonRouterOutlet,
  ],
  templateUrl: './empty-layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmptyLayoutComponent extends BaseComponent { }
