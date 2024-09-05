import { CommonModule, DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, Inject, OnInit } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { ShareModule } from '../share/share.module';
import { EmptyLayoutComponent } from './layouts/empty-layout/empty-layout.component';
import { ClassicLayoutComponent } from './layouts/classic-layout/classic-layout.component';
import { ThemeService } from '../services/theme.service';
import { takeUntil } from 'rxjs';
import { LanguageService } from '../services/language.service';
import { TranslocoService } from '@jsverse/transloco';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    CommonModule,
    ShareModule,
    EmptyLayoutComponent,
    ClassicLayoutComponent,
  ],
  templateUrl: './layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent extends BaseComponent implements OnInit {
  layout: string | 'empty' | 'classic' = 'empty';
  private _themeService: ThemeService = inject(ThemeService);
  private _languageService: LanguageService = inject(LanguageService);
  private _translocoService: TranslocoService = inject(TranslocoService);
  constructor(
    @Inject(DOCUMENT) private document: Document,
  ) {
    super();
  }
  override ngOnInit(): void {
    super.ngOnInit();
    this.activatedRoute.data.subscribe(data => {
      if (!data || !data['layout']) {
        return;
      }
      this.layout = data['layout'];
      this.changeDetectorRef.markForCheck();
    });
    this._themeService.theme$.pipe(takeUntil(this.unsubscribeAll)).subscribe(theme => {
      this.document.body.setAttribute('data-theme', theme);
    });
    this._languageService.language$.pipe(takeUntil(this.unsubscribeAll)).subscribe(language => {
      this._translocoService.setActiveLang(language);
    });
  }
}
