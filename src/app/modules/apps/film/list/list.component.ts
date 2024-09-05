import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs';
import { BaseComponent } from 'src/app/core/base/base.component';
import { FilmService } from 'src/app/core/services/apps/film/film.service';
import { Film } from 'src/app/core/services/apps/film/film.types';
import { ShareModule } from 'src/app/core/share/share.module';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    CommonModule,
    ShareModule,
  ],
  templateUrl: './list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent extends BaseComponent implements OnInit {
  films!: Film[];
  private _filmService: FilmService = inject(FilmService);
  override ngOnInit(): void {
    super.ngOnInit();   
    this._filmService.films$.pipe(takeUntil(this.unsubscribeAll)).subscribe(films => {
      if (!films) {
        return;
      }
      this.films = films;
      this.changeDetectorRef.markForCheck();
    });
  }
}
