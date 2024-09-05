import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs';
import { BaseComponent } from 'src/app/core/base/base.component';
import { AddressBookService } from 'src/app/core/services/apps/address-book/address-book.service';
import { AddressBook } from 'src/app/core/services/apps/address-book/address-book.types';
import { ShareModule } from 'src/app/core/share/share.module';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    CommonModule,
    ShareModule,
  ],
  templateUrl: './list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent extends BaseComponent implements OnInit {
  onSearch: boolean = false;
  addressBooks!: AddressBook[];
  private _addressBookService: AddressBookService = inject(AddressBookService);
  override ngOnInit(): void {
    super.ngOnInit();
    this._addressBookService.addressBooks$.pipe(takeUntil(this.unsubscribeAll)).subscribe(addressBooks => {
      if (!addressBooks) {
        return;
      }
      this.addressBooks = addressBooks;
      this.changeDetectorRef.markForCheck();
    });
  }
}
