import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, inject, ViewChild } from '@angular/core';
import { BaseComponent } from 'src/app/core/base/base.component';
import { ShareModule } from 'src/app/core/share/share.module';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { UserService } from 'src/app/core/services/user/user.service';
import { from, takeUntil } from 'rxjs';
import { Validators } from '@angular/forms';
import { ToastService } from 'src/app/core/services/toast.service';
import { User } from 'src/app/core/services/user/user';
@Component({
  selector: 'app-edit-profile',
  standalone: true,
  imports: [
    CommonModule,
    ShareModule,
  ],
  templateUrl: './edit-profile.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditProfileComponent extends BaseComponent {
  @ViewChild('modal') modal!: ElementRef;
  user!: User;
  isMobile: boolean = this.platform.is('mobile');
  base64Image!: string | undefined;
  private _userService: UserService = inject(UserService);
  private _toastService: ToastService = inject(ToastService);
  override ngOnInit(): void {
    super.ngOnInit();
    this.form = this.formBuilder.group({
      email: ['', Validators.required],
      fullname: ['', Validators.required],
      avatar: [''],
      phone: [''],
      address: [''],
      city: [''],
      country: [''],
    });
    this._userService.user$.pipe(takeUntil(this.unsubscribeAll)).subscribe(user => {
      if (!user) {
        return;
      }
      this.user = user;
      this.form.patchValue(user);
      this.changeDetectorRef.markForCheck();
    });
  }
  requestPhoto() {
    Camera.checkPermissions().then(status => {
      if (status.photos != 'granted') {
        Camera.requestPermissions({
          permissions: ['photos']
        }).then(status => {
          if (status.photos != 'granted') {
            return;
          }
          this.choosePhoto();
        });
      }
      this.choosePhoto();
    });
  }
  choosePhoto() {
    from(Camera.getPhoto({
      resultType: CameraResultType.Base64,
      source: CameraSource.Photos,
    })).subscribe(photo => {
      this.showModal(photo.base64String);
    });
  }
  changeAvatar() {
    this.form.patchValue({
      avatar: this.base64Image,
    });
    this.changeDetectorRef.markForCheck();
  }

  requestCamera() {
    Camera.checkPermissions().then(status => {
      if (status.camera != 'granted') {
        Camera.requestPermissions({
          permissions: ['camera']
        }).then(status => {
          if (status.camera != 'granted') {
            return;
          }
          this.takePhoto();
        });
      }
      this.takePhoto();
    });
  }

  takePhoto() {
    from(Camera.getPhoto({
      resultType: CameraResultType.Base64,
      source: CameraSource.Camera,
    })).subscribe(photo => {
      this.showModal(photo.base64String);
    });
  }

  update() {
    if (this.form.invalid) {
      return;
    }
    this._userService.update(this.form.getRawValue()).subscribe(() => {
      this._toastService.add({
        text: 'profile updated successfully',
        duration: 'short',
      });
    });
  }

  showModal(base64: string | undefined) {
    this.modal.nativeElement.showModal();
    this.base64Image = 'data:image/png;base64,' + base64;
    this.changeDetectorRef.markForCheck();
  }
}
