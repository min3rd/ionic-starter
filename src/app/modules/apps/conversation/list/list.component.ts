import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs';
import { BaseComponent } from 'src/app/core/base/base.component';
import { ConversationService } from 'src/app/core/services/apps/conversation/conversation.service';
import { Conversation } from 'src/app/core/services/apps/conversation/conversation.types';
import { ShareModule } from 'src/app/core/share/share.module';

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
export class ListComponent extends BaseComponent implements OnInit {
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
  search(event: any): void {
    this.router.navigate(['../../', event.target?.value], { relativeTo: this.activatedRoute });
  }
}
