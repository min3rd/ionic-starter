import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs';
import { BaseComponent } from 'src/app/core/base/base.component';
import { ConversationService } from 'src/app/core/services/apps/conversation/conversation.service';
import { Conversation, Message } from 'src/app/core/services/apps/conversation/conversation.types';
import { User } from 'src/app/core/services/user/user';
import { UserService } from 'src/app/core/services/user/user.service';
import { ShareModule } from 'src/app/core/share/share.module';
import { ActionSheetButton } from "@ionic/angular";
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
export class ChatComponent extends BaseComponent implements OnInit {
  conversation!: Conversation;
  messages!: Message[];
  user!: User;
  actionSheetButtons!: ActionSheetButton[];
  private _conversationService: ConversationService = inject(ConversationService);
  private _userService: UserService = inject(UserService);
  override ngOnInit(): void {
    super.ngOnInit();
    this.actionSheetButtons = [
      {
        id: 'memebers',
        text: this.capitalize.translate('members'),
        icon: 'people',
        handler: () => {
          console.log('memebers');
        },
      },
      {
        id: 'mark-as-readed',
        text: this.capitalize.translate('mark as readed'),
        icon: 'checkmark-circle',
        handler: () => {
          console.log('mark-as-readed');
        },
      },
      {
        id: 'delete-chat',
        text: this.capitalize.translate('delete chat'),
        icon: 'trash',
        handler: () => {
          console.log('delete-chat');
        },
      },
    ];
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
