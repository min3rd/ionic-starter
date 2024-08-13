import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { takeUntil } from 'rxjs';
import { BaseComponent } from 'src/app/core/base/base.component';
import { UserService } from 'src/app/core/services/user/user.service';
import { ShareModule } from 'src/app/core/share/share.module';
import { ChangePasswordComponent } from '../change-password/change-password.component';
import { ProfileComponent } from '../profile/profile.component';
import { AuthService } from 'src/app/core/auth/auth.service';
import { User } from 'src/app/core/services/user/user';

@Component({
  selector: 'app-user-nav',
  standalone: true,
  imports: [
    CommonModule,
    ShareModule,
  ],
  templateUrl: './user-nav.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserNavComponent extends BaseComponent {
  user!: User;
  private _userService: UserService = inject(UserService);
  private _authService:AuthService = inject(AuthService);
  changePasswordComponent = ChangePasswordComponent;
  profileComponent = ProfileComponent;
  override ngOnInit(): void {
    super.ngOnInit();
    this._userService.user$.pipe(takeUntil(this.unsubscribeAll)).subscribe(user => {
      if (!user) {
        return;
      }
      this.user = user;
      this.changeDetectorRef.markForCheck();
    });
  }
  signOut(){
    this._authService.signOut();
  }
}
