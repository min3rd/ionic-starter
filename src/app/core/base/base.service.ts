import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  public httpClient: HttpClient = inject(HttpClient);
}
