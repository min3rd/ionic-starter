import { Injectable } from '@angular/core';
import { ShowOptions, Toast } from '@capacitor/toast';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  constructor() { }
  add(showOptions: ShowOptions) {
    Toast.show(showOptions);
  }
}
