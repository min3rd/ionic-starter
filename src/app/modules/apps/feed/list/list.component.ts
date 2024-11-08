import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Share } from '@capacitor/share';
import { ActionSheetButton, PopoverController } from '@ionic/angular/standalone';
import { takeUntil, from } from 'rxjs';
import { BaseComponent } from 'src/app/core/base/base.component';
import { emojisData } from 'src/app/core/mock-api/apps/feed/data';
import { FeedService } from 'src/app/core/services/apps/feed/feed.service';
import { Post, Like, Emoji } from 'src/app/core/services/apps/feed/feed.types';
import { User } from 'src/app/core/services/user/user';
import { UserService } from 'src/app/core/services/user/user.service';
import { ShareModule } from 'src/app/core/share/share.module';
import { MoreEmojiComponent } from '../more-emoji/more-emoji.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    CommonModule,
    ShareModule,
  ],
  templateUrl: './list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent extends BaseComponent {
  user!: User;
  posts!: Post[];
  likes = emojisData;
  actionSheetButtons!: ActionSheetButton[];
  private _userService: UserService = inject(UserService);
  private _feedService: FeedService = inject(FeedService);
  private _popOverController: PopoverController = inject(PopoverController);
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
    this.actionSheetButtons = [
      {
        text: this.capitalize.translate('interested'),
        icon: 'add-circle',
      },
      {
        text: this.capitalize.translate('not interested'),
        icon: 'remove-circle',
      },
      {
        text: this.capitalize.translate('save post'),
        icon: 'bookmark',
      },
      {
        text: this.capitalize.translate('hide post'),
        icon: 'close-circle',
      },
      {
        text: this.capitalize.translate('report post'),
        icon: 'alert-circle',
      },
      {
        text: this.capitalize.translate('get notified about this post'),
        icon: 'notifications',
      },
      {
        text: this.capitalize.translate('add to favorites'),
        icon: 'star',
      },
      {
        text: this.capitalize.translate('snooze for 30 days'),
        icon: 'time',
      },
      {
        text: this.capitalize.translate('unfollow'),
        icon: 'close-circle',
      },
      {
        text: this.capitalize.translate('manage your feed'),
        icon: 'options',
      },
    ];
  }
  emojis(likes: Like[] | undefined): Emoji[] {
    if (!likes) return [];
    let emojis: any[] = [];
    for (let like of likes) {
      if (emojis.includes(like.emoji)) continue;
      emojis.push(like.emoji);
    }
    return emojis;
  }
  share(post: Post) {
    from(Share.share({
      title: post.title,
      text: post.content,
      url: this.activatedRoute.snapshot.url.join('/'),
    })).subscribe(() => {
    });
  }
  longPressLike(post: Post) {
    from(this._popOverController.create({
      component: MoreEmojiComponent,
      trigger: `more-emoji-${post.id}`,
      reference: 'trigger',
      side: 'top',
    })).subscribe(popOver => {
      from(popOver.present()).subscribe(() => {
        this.changeDetectorRef.markForCheck();
      });
    });
  }
  emoed(post: Post) {
    return post.likes?.find(like => like.userId === this.user.id);
  }
}
