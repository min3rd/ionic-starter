import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { UntypedFormArray, UntypedFormControl, Validators } from '@angular/forms';
import { Camera, CameraResultType } from '@capacitor/camera';
import { from, takeUntil } from 'rxjs';
import { BaseComponent } from 'src/app/core/base/base.component';
import { AddressBookService } from 'src/app/core/services/apps/address-book/address-book.service';
import { AddressBook } from 'src/app/core/services/apps/address-book/address-book.types';
import { CountryService } from 'src/app/core/services/common/country/country.service';
import { Country } from 'src/app/core/services/common/country/country.types';
import { ShareModule } from 'src/app/core/share/share.module';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [
    CommonModule,
    ShareModule,
  ],
  templateUrl: './edit.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditComponent extends BaseComponent {
  addressBook!: AddressBook;
  countries!: Country[];
  private _addressBookService: AddressBookService = inject(AddressBookService);
  private _countryService: CountryService = inject(CountryService);
  override ngOnInit(): void {
    super.ngOnInit();
    this.form = this.formBuilder.group({
      avatar: [''],
      lastname: ['', Validators.required],
      firstname: ['', Validators.required],
      nickname: [''],
      emails: this.formBuilder.array([]),
      phones: this.formBuilder.array([]),
      address: [''],
      city: [''],
      country: [''],
    });
    this._addressBookService.addressBook$.pipe(takeUntil(this.unsubscribeAll)).subscribe(addressBook => {
      if (!addressBook) {
        return;
      }
      this.addressBook = addressBook;
      this.form.patchValue(addressBook);
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
  changeAvatar() {
    from(Camera.getPhoto({
      resultType: CameraResultType.Base64,
    })).subscribe(photo => {
      this.form.patchValue({
        avatar: 'data:image/png;base64,' + photo.base64String,
      });

      this.changeDetectorRef.markForCheck();
    });
  }
  removeAvatar() {
    this.form.patchValue({
      avatar: '',
    });
    this.changeDetectorRef.markForCheck();
  }

  addEmail() {
    const form = this.formBuilder.group({
      email: ['', Validators.required],
    });

    (this.form.get('emails') as UntypedFormArray).push(form);

    this.changeDetectorRef.markForCheck();
  }

  getEmailsFormArray() {
    return (this.form.get('emails') as any)?.controls;
  }

  removeEmail(index: number) {
    (this.form.get('emails') as UntypedFormArray).removeAt(index);
    this.changeDetectorRef.markForCheck();
  }

  addPhone() {
    const form = this.formBuilder.group({
      code: ['', Validators.required],
      number: ['', Validators.required],
    });

    (this.form.get('phones') as UntypedFormArray).push(form);

    this.changeDetectorRef.markForCheck();
  }

  getPhonesFormArray() {
    return (this.form.get('phones') as any)?.controls;
  }

  removePhone(index: number) {
    (this.form.get('phones') as UntypedFormArray).removeAt(index);
    this.changeDetectorRef.markForCheck();
  }

  create() {
    if (this.form.invalid) {
      return;
    }
    this._addressBookService.create(this.form.value).subscribe((addressBook) => {
      this.router.navigate(['../', addressBook.id], { relativeTo: this.activatedRoute });
    });
  }
}
