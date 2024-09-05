import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/core/base/base.component';
import { FileManagerService } from 'src/app/core/services/apps/file-manager/file-manager.service';
import { Item } from 'src/app/core/services/apps/file-manager/file-manager.types';
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
export class FileManagerComponent extends BaseComponent implements OnInit {
  items!: Item[];
  folders!: Item[];
  files!: Item[];
  displayType: 'list' | 'grid' = 'grid';
  private _fileManagerService: FileManagerService = inject(FileManagerService);
  override ngOnInit(): void {
    super.ngOnInit();
    this._fileManagerService.items$.subscribe(items => {
      if (!items) {
        return;
      }
      this.items = items;
      this.folders = items.filter(item => item.type === 'folder');
      this.files = items.filter(item => item.type !== 'folder');
    });
  }
}
