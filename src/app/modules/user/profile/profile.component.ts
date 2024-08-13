import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { takeUntil } from 'rxjs';
import { BaseComponent } from 'src/app/core/base/base.component';
import { UserService } from 'src/app/core/services/user/user.service';
import { ShareModule } from 'src/app/core/share/share.module';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { User } from 'src/app/core/services/user/user';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    CommonModule,
    ShareModule,
  ],
  templateUrl: './profile.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileComponent extends BaseComponent {
  private _userService: UserService = inject(UserService);
  user!: User;
  editProfileComponent = EditProfileComponent;
  override ngOnInit(): void {
    super.ngOnInit();
    this._userService.user$.pipe(takeUntil(this.unsubscribeAll)).subscribe(user => {
      this.user = user;
      this.changeDetectorRef.markForCheck();
    });
  }
}
