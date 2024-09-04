import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { finalize, takeWhile, tap, timer } from 'rxjs';
import { AuthService } from 'src/app/core/auth/auth.service';
import { BaseComponent } from 'src/app/core/base/base.component';
import { StorageService } from 'src/app/core/services/storage.service';
import { ShareModule } from 'src/app/core/share/share.module';

@Component({
  selector: 'app-sign-out',
  standalone: true,
  imports: [
    CommonModule,
    ShareModule,
  ],
  templateUrl: './sign-out.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignOutComponent extends BaseComponent {
  countdown: number = 60; // redirect in 5s
  private _storageService: StorageService = inject(StorageService);
  private _authService: AuthService = inject(AuthService);
  override ngOnInit(): void {
    super.ngOnInit();
    this._authService.accessToken = undefined;
    this._storageService.clear().subscribe();
    timer(1000, 1000).pipe(
      finalize(() => {
        this.router.navigate(['/sign-in']);
      }),
      takeWhile(() => this.countdown > 0),
      tap(() => {
        this.countdown--;
        this.changeDetectorRef.markForCheck();
      }),
    ).subscribe();
  }
}
