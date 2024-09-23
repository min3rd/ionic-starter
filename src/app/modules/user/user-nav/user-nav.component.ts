import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs';
import { BaseComponent } from 'src/app/core/base/base.component';
import { UserService } from 'src/app/core/services/user/user.service';
import { ShareModule } from 'src/app/core/share/share.module';
import { ChangePasswordComponent } from '../change-password/change-password.component';
import { ProfileComponent } from '../profile/profile.component';
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
export class UserNavComponent extends BaseComponent implements OnInit {
  user!: User;
  private _userService: UserService = inject(UserService);
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
}
