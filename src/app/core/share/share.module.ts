import { IonRouterOutlet } from '@ionic/angular/standalone';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoModule } from '@jsverse/transloco';
import { PipeModule } from '../pipe/pipe.module';
import { IonContent, IonInput, IonAvatar, IonList, IonItem, IonInputPasswordToggle, IonButton, IonItemDivider, IonLabel, IonCheckbox } from "@ionic/angular/standalone";
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
  ],
  exports: [
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    TranslocoModule,
    PipeModule,
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
  ]
})
export class ShareModule { }
