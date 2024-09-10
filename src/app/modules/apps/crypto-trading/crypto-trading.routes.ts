import { ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from "@angular/router";
import { CryptoTradingComponent } from "./crypto-trading.component";
import { ListComponent } from "./list/list.component";
import { CryptoTradingService } from "src/app/core/services/apps/crypto-trading/crypto-trading.service";
import { inject } from "@angular/core";

const listResolve = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    const cryptoTradingService: CryptoTradingService = inject(CryptoTradingService);
    return cryptoTradingService.search();
}

export const routes: Routes = [
    {
        path: '',
        component: CryptoTradingComponent,
        children: [
            {
                path: '',
                resolve: [listResolve],
                component: ListComponent,
            }
        ],
    }
];