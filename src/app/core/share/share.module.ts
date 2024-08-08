import { IonRouterOutlet, IonApp, IonHeader } from '@ionic/angular/standalone';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoModule } from '@jsverse/transloco';
import { PipeModule } from '../pipe/pipe.module';
import { IonContent, IonInput, IonAvatar, IonList, IonItem, IonInputPasswordToggle, IonButton, IonItemDivider, IonLabel, IonCheckbox, IonIcon } from "@ionic/angular/standalone";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    TranslocoModule,
    PipeModule,
    IonApp,
    IonHeader,
    IonRouterOutlet,
    IonContent,
    IonInput,
    IonAvatar,
    IonList,
    IonItem,
    IonInputPasswordToggle,
    IonButton,
    IonItemDivider,
    IonLabel,
    IonCheckbox,
    IonIcon,
  ],
  exports: [
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    TranslocoModule,
    PipeModule,
    IonApp,
    IonHeader,
    IonRouterOutlet,
    IonContent,
    IonInput,
    IonAvatar,
    IonList,
    IonItem,
    IonInputPasswordToggle,
    IonButton,
    IonItemDivider,
    IonLabel,
    IonCheckbox,
    IonIcon,
  ]
})
export class ShareModule { }
