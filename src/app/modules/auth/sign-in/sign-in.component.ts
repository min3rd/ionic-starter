import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/auth/auth.service';
import { BaseComponent } from 'src/app/core/base/base.component';
import { adminCredential } from 'src/app/core/mock-api/auth/data';
import { ToastService } from 'src/app/core/services/toast.service';
import { ShareModule } from 'src/app/core/share/share.module';
import { getQuery } from 'src/app/core/utils/functions';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [
    CommonModule,
    ShareModule,
  ],
  templateUrl: './sign-in.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignInComponent extends BaseComponent {
  private _authService: AuthService = inject(AuthService);
  private _toastService: ToastService = inject(ToastService);
  override ngOnInit(): void {
    super.ngOnInit();
    this.form = this.formBuilder.group({
      email: [adminCredential.email, Validators.required],
      password: [adminCredential.password, Validators.required],
      rememberMe: [adminCredential.rememeberMe],
    });
  }
  signIn() {
    if (this.form.invalid) {
      return;
    }
    this._authService.signIn(this.form.getRawValue()).subscribe(() => {
      this._toastService.add({
        text: 'sign in successfully',
        duration: 'short',
      });
      if (getQuery(this.activatedRoute.snapshot, 'redirectURL')) {
        this.router.navigate([
          getQuery(this.activatedRoute.snapshot, 'redirectURL')
        ],
          {
            relativeTo: this.activatedRoute.parent,
          });
        return;
      }
      this.router.navigate(['/']);
    });
  }
}
