import { provideHttpClient, withInterceptors } from "@angular/common/http";
import { ENVIRONMENT_INITIALIZER, EnvironmentProviders, inject, Provider } from "@angular/core";
import { authInterceptor } from "./auth.interceptor";
import { AuthService } from "./auth.service";

export const provideAuth = (): Array<Provider | EnvironmentProviders> => {
    return [
        {
            provide: ENVIRONMENT_INITIALIZER,
            useValue: () => inject(AuthService),
            multi: true
        },
        provideHttpClient(withInterceptors([authInterceptor])),
    ];
};