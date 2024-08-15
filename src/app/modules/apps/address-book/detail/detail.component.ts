import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { UntypedFormArray, UntypedFormControl, Validators } from '@angular/forms';
import { Camera, CameraResultType } from '@capacitor/camera';
import { from, takeUntil } from 'rxjs';
import { BaseComponent } from 'src/app/core/base/base.component';
import { AddressBookService } from 'src/app/core/services/apps/address-book/address-book.service';
import { AddressBook } from 'src/app/core/services/apps/address-book/address-book.types';
import { ShareModule } from 'src/app/core/share/share.module';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [
    CommonModule,
    ShareModule,
  ],
  templateUrl: './detail.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailComponent extends BaseComponent {
  addressBook!: AddressBook;
  private _addressBookService: AddressBookService = inject(AddressBookService);
  override ngOnInit(): void {
    super.ngOnInit();
    this.form = this.formBuilder.group({
      avatar: [''],
      lastname: ['', Validators.required],
      firstname: ['', Validators.required],
      nickname: [''],
      emails: this.formBuilder.array([]),
    });
    this._addressBookService.addressBook$.pipe(takeUntil(this.unsubscribeAll)).subscribe(addressBook => {
      if (!addressBook) {
        return;
      }
      this.addressBook = addressBook;
      this.form.patchValue(addressBook);
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
    console.log(this.form.get('emails'));
    
    this.changeDetectorRef.markForCheck();
  }
  getEmailsFormArray() {
    return (this.form.get('emails') as any)?.controls;
  }
}
