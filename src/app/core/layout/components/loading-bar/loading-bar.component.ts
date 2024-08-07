import { IonProgressBar } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-loading-bar',
  standalone: true,
  imports: [
    CommonModule,
    IonProgressBar,
  ],
  templateUrl: './loading-bar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoadingBarComponent {

}
