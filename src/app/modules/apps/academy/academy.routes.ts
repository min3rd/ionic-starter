import { ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from "@angular/router";
import { AcademyComponent } from "./academy.component";
import { ListComponent } from "./list/list.component";
import { AcademyService } from "src/app/core/services/apps/academy/academy.service";
import { inject } from "@angular/core";
import { getParam } from "src/app/core/utils/functions";
import { DetailComponent } from "./detail/detail.component";

export const categoriesResolver = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    const academyService: AcademyService = inject(AcademyService);
    return academyService.categories();
}
export const listResolve = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    const academyService: AcademyService = inject(AcademyService);
    return academyService.search({
        query: getParam(route, 'categoryCourse'),
        page: +getParam(route, 'pageCourse'),
        size: 20,
    });
}

export const detailResolve = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    const academyService: AcademyService = inject(AcademyService);
    return academyService.get(getParam(route, 'courseId'));
}

export const stepsResolve = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    const academyService: AcademyService = inject(AcademyService);
    return academyService.steps(getParam(route, 'courseId'));
}

export const routes: Routes = [
    {
        path: '',
        component: AcademyComponent,
        resolve: [categoriesResolver],
        children: [
            { path: '', redirectTo: 'all', pathMatch: 'full' },
            {
                path: ':categoryCourse',
                children: [
                    { path: '', pathMatch: 'full', redirectTo: '1' },
                    {
                        path: ':pageCourse',
                        component: ListComponent,
                        resolve: [listResolve],
                    }
                ]
            }
        ]
    },
    {
        path: ':categoryCourse/:pageCourse/:courseId',
        component: DetailComponent,
        resolve: [detailResolve, stepsResolve],
    }
];