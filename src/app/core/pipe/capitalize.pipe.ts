import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize',
  standalone: true,
})
export class CapitalizePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): string {
    if (typeof value !== 'string') {
      return `${value}`;
    }
    if (value.trim().length === 0) {
      return value;
    }
    return value.charAt(0).toUpperCase() + value.slice(1);
  }
}
