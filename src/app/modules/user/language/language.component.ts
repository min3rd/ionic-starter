import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TranslocoService } from '@jsverse/transloco';
import { takeUntil } from 'rxjs';
import { BaseComponent } from 'src/app/core/base/base.component';
import { LanguageService } from 'src/app/core/services/language.service';
import { ShareModule } from 'src/app/core/share/share.module';
import { languagesData } from 'src/app/core/transloco/languages';

@Component({
  selector: 'app-language',
  standalone: true,
  imports: [
    CommonModule,
    ShareModule,
  ],
  templateUrl: './language.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LanguageComponent extends BaseComponent {
  languages = languagesData;
  selected: any;
  private _languageService: LanguageService = inject(LanguageService);
  override ngOnInit(): void {
    super.ngOnInit();
    this._languageService.language$.pipe(takeUntil(this.unsubscribeAll)).subscribe(language => {
      this.selected = language;
      this.changeDetectorRef.markForCheck();
    });
  }
  onChanges(event: any) {
    this.selected = event.target.value;
    this._languageService.set(event.target.value);
  }
}
