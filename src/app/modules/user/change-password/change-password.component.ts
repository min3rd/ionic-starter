import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { BaseComponent } from 'src/app/core/base/base.component';
import { ShareModule } from 'src/app/core/share/share.module';
import { IonBackButton } from "@ionic/angular/standalone";
import { Validators } from '@angular/forms';
import { ToastService } from 'src/app/core/services/toast.service';
import { UserService } from 'src/app/core/services/user/user.service';

@Component({
  selector: 'app-change-password',
  standalone: true,
  imports: [IonBackButton,
    CommonModule,
    ShareModule,
  ],
  templateUrl: './change-password.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChangePasswordComponent extends BaseComponent {
  private _toastService: ToastService = inject(ToastService);
  private _userService: UserService = inject(UserService);
  override ngOnInit(): void {
    super.ngOnInit();
    this.form = this.formBuilder.group({
      currentPassword: ['', Validators.required],
      newPassword: ['', Validators.required],
      confirmNewPassword: ['', Validators.required],
    });
  }

  changePassword() {
    if (this.form.invalid) {
      return;
    }
    // Do something
    if (this.form.value.newPassword !== this.form.value.confirmNewPassword) {
      this._toastService.add({
        text: 'Password does not match',
        duration: 'short',
      });
      return;
    }

    this._userService.changePassword(this.form.getRawValue()).subscribe(() => {
      this._toastService.add({
        text: 'password changed successfully',
        duration: 'short',
      });
      this.router.navigate(['/user']);
    });
  }
}
