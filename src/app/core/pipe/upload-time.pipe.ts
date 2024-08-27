import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'uploadTime',
  standalone: true,
})
export class UploadTimePipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return this.diff(value, new Date());
  }
  diff(date1: any, date2: any) {
    var second = 1000, minute = second * 60, hour = minute * 60, day = hour * 24, week = day * 7;
    date1 = new Date(date1);
    date2 = new Date(date2);
    var timediff = date2 - date1;
    if (isNaN(timediff)) return NaN;
    let interval = 'years';
    if (timediff < minute) {
      interval = "seconds";
    } else if (timediff < hour) {
      interval = "minutes";
    } else if (timediff < day) {
      interval = "hours";
    } else if (timediff < week) {
      interval = "days";
    } else if (timediff < 4 * week) {
      interval = "weeks";
    } else if (timediff < 52 * week) {
      interval = "months";
    }
    switch (interval) {
      case "years": return date2.getFullYear() - date1.getFullYear() + ' years ago';
      case "months": return (
        (date2.getFullYear() * 12 + date2.getMonth())
        -
        (date1.getFullYear() * 12 + date1.getMonth())
        + ' months ago'
      );
      case "weeks": return Math.floor(timediff / week) + ' weeks ago';
      case "days": return Math.floor(timediff / day) + ' days ago';
      case "hours": return Math.floor(timediff / hour) + ' hours ago';
      case "minutes": return Math.floor(timediff / minute) + ' minutes ago';
      case "seconds": return Math.floor(timediff / second) + ' seconds ago';
      default: return undefined;
    }
  }
}
