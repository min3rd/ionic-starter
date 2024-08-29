import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { takeUntil } from 'rxjs';
import { BaseComponent } from 'src/app/core/base/base.component';
import { ConversationService } from 'src/app/core/services/apps/conversation/conversation.service';
import { Conversation, Message } from 'src/app/core/services/apps/conversation/conversation.types';
import { User } from 'src/app/core/services/user/user';
import { UserService } from 'src/app/core/services/user/user.service';
import { ShareModule } from 'src/app/core/share/share.module';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [
    CommonModule,
    ShareModule,
  ],
  templateUrl: './chat.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatComponent extends BaseComponent {
  conversation!: Conversation;
  messages!: Message[];
  user!: User;
  private _conversationService: ConversationService = inject(ConversationService);
  private _userService: UserService = inject(UserService);
  override ngOnInit(): void {
    super.ngOnInit();
    this._conversationService.conversation$.pipe(takeUntil(this.unsubscribeAll)).subscribe(conversation => {
      if (!conversation) return;
      this.conversation = conversation;
      this.changeDetectorRef.markForCheck();
    });
    this._conversationService.messages$.pipe(takeUntil(this.unsubscribeAll)).subscribe(messages => {
      if (!messages) return;
      this.messages = messages;

      this.changeDetectorRef.markForCheck();
    });
    this._userService.user$.pipe(takeUntil(this.unsubscribeAll)).subscribe(user => {
      if (!user) return;
      this.user = user;
      this.changeDetectorRef.markForCheck();
    });
  }
  handleRefresh(event: any) {
  }
}
