import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from "@angular/router";
import { UserService } from "./core/services/user/user.service";
import { inject } from "@angular/core";
import { forkJoin, Observable } from "rxjs";
import { AppsService } from "./core/services/apps/apps.service";

export const metaDataResolver: ResolveFn<Observable<any>> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    const userService: UserService = inject(UserService);
    const appsService: AppsService = inject(AppsService);
    return forkJoin([
        userService.get(),
        appsService.get(),
    ]);
}