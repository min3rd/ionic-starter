import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'abbreviate',
  standalone: true,
})
export class AbbreviatePipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    return this.abbreviate(value, 0);
  }

  abbreviate(num: any, fixed: any) {
    if (num === null) { return null; } // terminate early
    if (num === undefined) { return undefined; } // terminate early
    if (isNaN(num)) { return NaN; } // terminate early
    if (num === 0) { return '0'; } // terminate early
    fixed = (!fixed || fixed < 0) ? 0 : fixed; // number of decimal places to show
    var b = (num).toPrecision(2).split("e"), // get power
      k = b.length === 1 ? 0 : Math.floor(Math.min(b[1].slice(1), 14) / 3), // floor at decimals, ceiling at trillions
      c = k < 1 ? num.toFixed(0 + fixed) : (num / Math.pow(10, k * 3)).toFixed(1 + fixed), // divide by power
      d = c < 0 ? c : Math.abs(c), // enforce -0 is 0
      e = d + ['', 'K', 'M', 'B', 'T'][k]; // append power
    return e;
  }

}
