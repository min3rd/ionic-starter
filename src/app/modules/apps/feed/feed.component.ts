import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/core/base/base.component';
import { User } from 'src/app/core/services/user/user';
import { UserService } from 'src/app/core/services/user/user.service';
import { ShareModule } from 'src/app/core/share/share.module';

@Component({
  selector: 'app-feed',
  standalone: true,
  imports: [
    CommonModule,
    ShareModule,
  ],
  templateUrl: './feed.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeedComponent extends BaseComponent implements OnInit {
  user!: User;
  private _userService: UserService = inject(UserService);
  override ngOnInit(): void {
    super.ngOnInit();
    this._userService.user$.subscribe(user => {
      if (!user) return;
      this.user = user;
      this.changeDetectorRef.markForCheck();
    });
  }
}
