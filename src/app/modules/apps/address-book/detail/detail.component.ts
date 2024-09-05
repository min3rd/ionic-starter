import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { UntypedFormArray, UntypedFormControl, Validators } from '@angular/forms';
import { Camera, CameraResultType } from '@capacitor/camera';
import { from, takeUntil } from 'rxjs';
import { BaseComponent } from 'src/app/core/base/base.component';
import { AddressBookService } from 'src/app/core/services/apps/address-book/address-book.service';
import { AddressBook } from 'src/app/core/services/apps/address-book/address-book.types';
import { CountryService } from 'src/app/core/services/common/country/country.service';
import { Country } from 'src/app/core/services/common/country/country.types';
import { ShareModule } from 'src/app/core/share/share.module';
import { IonHeader, IonToolbar, IonLabel } from "@ionic/angular/standalone";

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [IonLabel, IonToolbar, IonHeader,
    CommonModule,
    ShareModule,
  ],
  templateUrl: './detail.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailComponent extends BaseComponent implements OnInit {
  addressBook!: AddressBook;
  countries!: Country[];
  private _addressBookService: AddressBookService = inject(AddressBookService);
  private _countryService: CountryService = inject(CountryService);
  override ngOnInit(): void {
    super.ngOnInit();
    this._addressBookService.addressBook$.pipe(takeUntil(this.unsubscribeAll)).subscribe(addressBook => {
      if (!addressBook) {
        return;
      }
      this.addressBook = addressBook;
      this.changeDetectorRef.markForCheck();
    });

    this._countryService.countries$.pipe(takeUntil(this.unsubscribeAll)).subscribe(countries => {
      if (!countries) {
        return;
      }
      this.countries = countries;
      this.changeDetectorRef.markForCheck();
    });
  }
}
