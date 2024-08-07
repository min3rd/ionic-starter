import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IonContent, IonInput, IonAvatar, IonList, IonItem, IonInputPasswordToggle, IonButton } from "@ionic/angular/standalone";
import { BaseComponent } from 'src/app/core/base/base.component';
import { ShareModule } from 'src/app/core/share/share.module';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [IonButton, 
    CommonModule,
    ShareModule,
    IonContent,
    IonInput,
    IonAvatar,
    IonList,
    IonItem,
    IonInputPasswordToggle,
  ],
  templateUrl: './sign-in.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignInComponent extends BaseComponent { }
