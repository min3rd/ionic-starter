import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { Share } from '@capacitor/share';
import { ActionSheetButton, PopoverController } from '@ionic/angular/standalone';
import { from, takeUntil } from 'rxjs';
import { BaseComponent } from 'src/app/core/base/base.component';
import { FeedService } from 'src/app/core/services/apps/feed/feed.service';
import { Emoji, Like, Post } from 'src/app/core/services/apps/feed/feed.types';
import { ShareModule } from 'src/app/core/share/share.module';
import { MoreEmojiComponent } from '../more-emoji/more-emoji.component';
import { UserService } from 'src/app/core/services/user/user.service';
import { User } from 'src/app/core/services/user/user';

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
export class DetailComponent extends BaseComponent implements OnInit {
  user!: User;
  post!: Post;
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
    this._feedService.post$.pipe(takeUntil(this.unsubscribeAll)).subscribe(post => {
      if (!post) return;
      this.post = post;
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
