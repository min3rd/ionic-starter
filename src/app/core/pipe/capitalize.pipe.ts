import { inject, Pipe, type PipeTransform } from '@angular/core';
import { TranslocoService } from '@jsverse/transloco';

@Pipe({
  name: 'capitalize',
  standalone: true,
})
export class CapitalizePipe implements PipeTransform {
  private _translocoService: TranslocoService = inject(TranslocoService);
  transform(value: unknown, ...args: unknown[]): string {
    if (typeof value !== 'string') {
      return `${value}`;
    }
    if (value.trim().length === 0) {
      return value;
    }
    return value.charAt(0).toUpperCase() + value.slice(1);
  }

  translate(value: string) {
    return this.transform(this._translocoService.translate(value));
  }
}
