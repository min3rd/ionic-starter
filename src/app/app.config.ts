import { ApplicationConfig, importProvidersFrom } from "@angular/core";
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';
import { provideHttpClient } from '@angular/common/http';
import { isDevMode } from '@angular/core';
import { provideTransloco } from '@jsverse/transloco';
import { TranslocoHttpLoader } from "./core/transloco/transloco-loader";
import { provideVn9Melody } from "./@vn9melody/provider";
import { routes } from "./app.routes";
import { IonicStorageModule } from "@ionic/storage-angular";

export const applicationConfig: ApplicationConfig = {
    providers: [
        { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
        provideIonicAngular(),
        provideRouter(routes, withPreloading(PreloadAllModules)),
        provideHttpClient(),
        importProvidersFrom(IonicStorageModule.forRoot()),
        provideTransloco({
            config: {
                availableLangs: ['en', 'es', 'vi'],
                defaultLang: 'vi',
                // Remove this option if your application doesn't support changing language in runtime.
                reRenderOnLangChange: true,
                prodMode: !isDevMode(),
            },
            loader: TranslocoHttpLoader
        }),
        provideVn9Melody(),
    ]
}