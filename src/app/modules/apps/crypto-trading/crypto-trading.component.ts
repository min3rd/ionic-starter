import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/core/base/base.component';
import { ShareModule } from 'src/app/core/share/share.module';

@Component({
  selector: 'app-crypto-trading',
  standalone: true,
  imports: [
    CommonModule,
    ShareModule,
  ],
  templateUrl: './crypto-trading.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CryptoTradingComponent extends BaseComponent implements OnInit { }
