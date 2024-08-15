import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { takeUntil } from 'rxjs';
import { BaseComponent } from 'src/app/core/base/base.component';
import { ConversationService } from 'src/app/core/services/apps/conversation/conversation.service';
import { Conversation } from 'src/app/core/services/apps/conversation/conversation.types';
import { ShareModule } from 'src/app/core/share/share.module';
import { getParam } from 'src/app/core/utils/functions';

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
  onSearch: boolean = false;
  conversations!: Conversation[];
  private _conversationService: ConversationService = inject(ConversationService);
  override ngOnInit(): void {
    super.ngOnInit();
    this._conversationService.conversions$.pipe(takeUntil(this.unsubscribeAll)).subscribe(conversations => {
      if (!conversations) {
        return;
      }
      this.conversations = conversations;
      this.changeDetectorRef.markForCheck();
    });
  }
  onIonInfinite(event: any) {
    this.router.navigate(['../', +getParam(this.activatedRoute.snapshot, 'pageConversation') + 1], { relativeTo: this.activatedRoute });
  }
  search(event: CustomEvent) {
    this.router.navigate(['../../', event.detail.value], { relativeTo: this.activatedRoute });
  }
}
