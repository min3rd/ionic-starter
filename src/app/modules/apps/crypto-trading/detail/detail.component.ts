import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/core/base/base.component';
import { ShareModule } from 'src/app/core/share/share.module';
import { HighchartsChartModule } from "highcharts-angular";
import { ohlcData } from 'src/app/core/mock-api/apps/crypto-trading/data';
import * as Highcharts from 'highcharts/highstock';
import HAccessibility from "highcharts/modules/accessibility";
import HDragPanes from "highcharts/modules/drag-panes";

HAccessibility(Highcharts);
HDragPanes(Highcharts);

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [
    CommonModule,
    ShareModule,
    HighchartsChartModule,
  ],
  templateUrl: './detail.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailComponent extends BaseComponent implements OnInit {
  tradingCoinShortName: string = 'BTC';
  baseCoinShortName: string = 'USDT';
  
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    credits: {
      enabled: false
    },
    series: [{
      data: ohlcData,
      type: 'candlestick',
      name: `${this.tradingCoinShortName}/${this.baseCoinShortName}`,
    }]
  };
  override ngOnInit(): void {
    super.ngOnInit();
    this.activatedRoute.params.subscribe((params: any) => {
      this.tradingCoinShortName = params.tradingCoin;
      this.baseCoinShortName = params.baseCoin;
      this.changeDetectorRef.detectChanges();
    });
  }
}
