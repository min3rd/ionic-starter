import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-conversation',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './conversation.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConversationComponent { }
