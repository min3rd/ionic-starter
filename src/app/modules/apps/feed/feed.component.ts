import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs';
import { BaseComponent } from 'src/app/core/base/base.component';
import { FeedService } from 'src/app/core/services/apps/feed/feed.service';
import { Like, Post } from 'src/app/core/services/apps/feed/feed.types';
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
  posts!: Post[];
  private _userService: UserService = inject(UserService);
  private _feedService: FeedService = inject(FeedService);
  override ngOnInit(): void {
    super.ngOnInit();
    this._userService.user$.pipe(takeUntil(this.unsubscribeAll)).subscribe(user => {
      if (!user) return;
      this.user = user;
      this.changeDetectorRef.markForCheck();
    });
    this._feedService.posts$.pipe(takeUntil(this.unsubscribeAll)).subscribe(posts => {
      if (!posts) return;
      this.posts = posts;
      this.changeDetectorRef.markForCheck();
    });
  }
  emojis(likes: Like[] | undefined): string[] {
    if (!likes) return [];
    let emojis: any[] = [];
    for (let like of likes) {
      if (emojis.includes(like.emoji)) continue;
      emojis.push(like.emoji);
    }
    return emojis;
  }
}
