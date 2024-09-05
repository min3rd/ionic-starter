import videojs from 'video.js';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, inject, ViewChild } from '@angular/core';
import { BaseComponent } from 'src/app/core/base/base.component';
import { ShareModule } from 'src/app/core/share/share.module';
import { FilmService } from 'src/app/core/services/apps/film/film.service';
import { takeUntil } from 'rxjs';
import { Film } from 'src/app/core/services/apps/film/film.types';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [
    CommonModule,
    ShareModule,
  ],
  templateUrl: './detail.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailComponent extends BaseComponent {
  @ViewChild('target', { static: true }) target!: ElementRef;
  film!: Film;
  films!: Film[];
  private _filmService: FilmService = inject(FilmService);
  override ngOnInit(): void {
    super.ngOnInit();
    this._filmService.film$.pipe(takeUntil(this.unsubscribeAll)).subscribe(film => {
      if (!film) {
        return;
      }
      this.film = film;
      videojs(this.target.nativeElement, {
        fluid: true,
        responsive: true,
        sources: [
          {
            src: film.video
          }
        ]
      }, () => {

      });
      this.changeDetectorRef.markForCheck();
    });
    this._filmService.films$.pipe(takeUntil(this.unsubscribeAll)).subscribe(films => {
      if (!films) {
        return;
      }
      this.films = films;
      this.changeDetectorRef.markForCheck();
    });
  }
}
