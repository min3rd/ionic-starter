import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { takeUntil } from 'rxjs';
import { BaseComponent } from 'src/app/core/base/base.component';
import { CryptoTradingService } from 'src/app/core/services/apps/crypto-trading/crypto-trading.service';
import { CryptoPair } from 'src/app/core/services/apps/crypto-trading/crypto-trading.types';
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
export class ListComponent extends BaseComponent {
  onSearch?: boolean = false;
  pairs!: CryptoPair[];
  private _cryptoTradingService: CryptoTradingService = inject(CryptoTradingService);
  override ngOnInit(): void {
    super.ngOnInit();
    this._cryptoTradingService.cryptoPairs$.pipe(takeUntil(this.unsubscribeAll)).subscribe(pairs => {
      if (!pairs) {
        return;
      }
      this.pairs = pairs;
      this.changeDetectorRef.markForCheck();
    });
  }
}
