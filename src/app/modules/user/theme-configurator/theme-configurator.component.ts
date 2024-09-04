import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { BaseComponent } from 'src/app/core/base/base.component';
import { ThemeService } from 'src/app/core/services/theme.service';
import { ShareModule } from 'src/app/core/share/share.module';

@Component({
  selector: 'app-theme-configurator',
  standalone: true,
  imports: [
    CommonModule,
    ShareModule,
  ],
  templateUrl: './theme-configurator.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemeConfiguratorComponent extends BaseComponent {
  private _themeService: ThemeService = inject(ThemeService);
  themes: string[] = [
    "light",
    "dark",
    "cupcake",
    "bumblebee",
    "emerald",
    "corporate",
    "synthwave",
    "retro",
    "cyberpunk",
    "valentine",
    "halloween",
    "garden",
    "forest",
    "aqua",
    "lofi",
    "pastel",
    "fantasy",
    "wireframe",
    "black",
    "luxury",
    "dracula",
    "cmyk",
    "autumn",
    "business",
    "acid",
    "lemonade",
    "night",
    "coffee",
    "winter",
    "dim",
    "nord",
    "sunset",
  ];
  onChange(event: any) {
    this._themeService.set(event.target.value ?? 'light');
  }
}
