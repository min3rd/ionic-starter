import { ActivatedRouteSnapshot } from "@angular/router"

export const getParam = (route: ActivatedRouteSnapshot, key: string): any => {
    let tmp: ActivatedRouteSnapshot | null = route;
    while (tmp != null && tmp.paramMap.get(key) === null) {
        tmp = tmp.parent;
    }
    if (!tmp) {
        return undefined;
    }
    return tmp.paramMap.get(key);
}

export const getQuery = (route: ActivatedRouteSnapshot, key: string): any => {
    return route.queryParamMap.get(key);
}


export const getRouteData = (route: ActivatedRouteSnapshot, key: string): any => {
    let tmp: ActivatedRouteSnapshot | null = route;
    while (tmp != null && tmp.data[key] === undefined) {
        tmp = tmp.parent;
    }
    if (!tmp) {
        return undefined;
    }
    return tmp.data[key];
}