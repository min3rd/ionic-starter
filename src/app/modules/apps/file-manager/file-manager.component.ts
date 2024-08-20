import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseComponent } from 'src/app/core/base/base.component';
import { ShareModule } from 'src/app/core/share/share.module';

@Component({
  selector: 'app-file-manager',
  standalone: true,
  imports: [
    CommonModule,
    ShareModule,
  ],
  templateUrl: './file-manager.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FileManagerComponent extends BaseComponent { }
