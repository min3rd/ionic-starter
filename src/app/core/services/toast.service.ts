import { inject, Injectable } from '@angular/core';
import { ShowOptions, Toast } from '@capacitor/toast';
import { CapitalizePipe } from '../pipe/capitalize.pipe';
import { TranslocoService } from '@jsverse/transloco';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  private _capitalizePipe: CapitalizePipe = new CapitalizePipe();
  private _translocoService: TranslocoService = inject(TranslocoService);
  constructor() { }
  add(showOptions: ShowOptions) {
    Toast.show({
      duration: showOptions.duration,
      position: showOptions.position,
      text: this._capitalizePipe.transform(this._translocoService.translate(showOptions.text)),
    });
  }
}
