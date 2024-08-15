import { cloneDeep } from "lodash-es";

export class MockApiUtils {
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Generate a globally unique id
     */
    static guid(): string {
        /* eslint-disable */

        let d = new Date().getTime();

        // Use high-precision timer if available
        if (
            typeof performance !== 'undefined' &&
            typeof performance.now === 'function'
        ) {
            d += performance.now();
        }

        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
            const r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
        });

        /* eslint-enable */
    }

    static filterData<T>(data: any[], key: string, query: string, page: number, size: number): T[] {
        let clone = cloneDeep(data);
        let filtered = clone.filter(e => `${e[key]}`.toLocaleLowerCase().includes(query.toLocaleLowerCase()));
        if (query === 'all') {
            filtered = cloneDeep(data);
        }
        if (page != undefined && size != undefined) {
            return filtered.slice((page - 1) * size, (page - 1) * size + size);
        }
        return filtered;
    }
}
