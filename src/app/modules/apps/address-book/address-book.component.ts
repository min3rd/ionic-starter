import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-address-book',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './address-book.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddressBookComponent { }
