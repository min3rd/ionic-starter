import { provideHttpClient, withInterceptors } from "@angular/common/http";
import { APP_INITIALIZER, EnvironmentProviders, Provider } from "@angular/core";
import { MOCK_API_DEFAULT_DELAY, mockApiInterceptor } from "./lib/mock-api";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { mockApi } from "../core/mock-api";

export const provideVn9Melody = (): Array<Provider | EnvironmentProviders> => {
    return [
        {
            provide: MOCK_API_DEFAULT_DELAY,
            useValue: 1000
        },
        provideAnimationsAsync(),
        provideHttpClient(withInterceptors([mockApiInterceptor])),
        {
            provide: APP_INITIALIZER,
            deps: [...mockApi],
            useFactory: () => () => null,
            multi: true
        },
    ];
}