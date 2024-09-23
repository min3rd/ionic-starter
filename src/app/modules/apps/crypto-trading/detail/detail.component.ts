import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/core/base/base.component';
import { ShareModule } from 'src/app/core/share/share.module';
import { HighchartsChartModule } from "highcharts-angular";
import * as Highcharts from 'highcharts/highstock';

import HAccessibility from "highcharts/modules/accessibility";

HAccessibility(Highcharts);

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
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    credits: {
      enabled: false
    },
    series: [{
      data: [1, 2, 3],
      type: 'line'
    }]
  };
  override ngOnInit(): void {
    super.ngOnInit();
  }
}
