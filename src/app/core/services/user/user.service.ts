import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { User } from '../../types/user';
import { BaseService } from '../../base/base.service';
import { Endpoint } from '../../constants/endpoint';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService {
  private _user: BehaviorSubject<User> = new BehaviorSubject<any>(null);

  get user$(): Observable<User> {
    return this._user.asObservable();
  };

  get() {
    return this.httpClient.get<User>(Endpoint.common_user()).pipe(tap(user => {
      this._user.next(user);
    }));
  }

  update(user: User) {
    return this.httpClient.put<User>(Endpoint.common_user(), user).pipe(tap(user => {
      this._user.next(user);
    }));
  }

  changePassword(values: { currentPassword: string, newPassword: string, confirmNewPassword: string }) {
    return this.httpClient.put(Endpoint.common_user_change_password(), values).pipe(tap());
  }
}
