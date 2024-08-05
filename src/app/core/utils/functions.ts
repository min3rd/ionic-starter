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

export function generate<T>(raw: object): T {   
    return _generate(...Object.keys(raw)) as T;
}

export function _generate<K extends PropertyKey>(...keys: K[]) {
    return Object.fromEntries(keys.map(k => [k, ""])) as { [P in K]: string };
}