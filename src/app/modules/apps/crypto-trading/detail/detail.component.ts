import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/core/base/base.component';
import { ShareModule } from 'src/app/core/share/share.module';
import { HighchartsChartModule } from "highcharts-angular";
import * as Highcharts from 'highcharts';
import HC_stock from 'highcharts/modules/stock';
import HC_customEvents from 'highcharts-custom-events';

HC_stock(Highcharts);
HC_customEvents(Highcharts);
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
  highcharts: typeof Highcharts = Highcharts;

  // starting values
  updateChart: boolean = false;
  usedIndex: number = 0;
  chartTitle: string = 'My chart'; // for init - change through titleChange


  charts = [{
    hcOptions: {
      title: { text: this.chartTitle },
      subtitle: { text: '1st data set' },
      plotOptions: {
        series: {
          pointStart: Date.now(),
          pointInterval: 86400000 // 1 day
        }
      },
      series: [{
        type: 'line',
        data: [11, 2, 3],
        threshold: 5,
        negativeColor: 'red',
        events: {
          dblclick: function () {
            console.log('dblclick - thanks to the Custom Events plugin');
          }
        }
      }, {
        type: 'candlestick',

        data: [
          [0, 15, -6, 7],
          [7, 12, -1, 3],
          [3, 10, -3, 3]
        ]
      }]
    } as Highcharts.Options,
    hcCallback: (chart: Highcharts.Chart) => {
      console.log('some variables: ', Highcharts, chart, this.charts);
    }
  }, {
    hcOptions: {
      title: { text: this.chartTitle },
      subtitle: { text: '2nd data set' },
      series: [{
        type: 'column',
        data: [4, 3, -12],
        threshold: -10
      }, {
        type: 'ohlc',
        data: [
          [0, 15, -6, 7],
          [7, 12, -1, 3],
          [3, 10, -3, 3]
        ]
      }]
    } as Highcharts.Options,
    hcCallback: () => { }
  }, {
    hcOptions: {
      title: { text: this.chartTitle },
      subtitle: { text: '3rd data set' },
      series: [{
        type: 'scatter',
        data: [1, 2, 3, 4, 5]
      }, {
        type: 'areaspline',
        data: [
          5,
          11,
          3,
          6,
          0
        ]
      }]
    } as Highcharts.Options,
    hcCallback: () => { }
  }];

  override ngOnInit(): void {
    super.ngOnInit();
  }

  titleChange(event: any) {
    var v = event;
    this.chartTitle = v;

    this.charts.forEach((el) => {
      if (!el.hcOptions.title) {
        el.hcOptions.title = {};
      }
      el.hcOptions.title.text = v;
    });

    this.updateChart = true;
  };
}
