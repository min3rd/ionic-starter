import { Injectable } from "@angular/core";
import { MockApi } from "../../mock-api";
import { Endpoint } from "src/app/core/constants/endpoint";
import { cloneDeep } from "lodash-es";
import { cryptoCoinsData } from "./data";
import { CryptoPair } from "src/app/core/services/apps/crypto-trading/crypto-trading.types";

@Injectable({
    providedIn: 'root'
})
export class CryptoTradingMockApi extends MockApi {
    override registerHandlers(): void {
        let cryptoCoins = cloneDeep(cryptoCoinsData);
        let cryptoPairs: CryptoPair[] = [];
        cryptoCoins.forEach((coin, index) => {
            cryptoCoins.forEach((baseCoin, baseIndex) => {
                if (index === baseIndex) return;
                cryptoPairs.push({
                    tradingCoin: coin,
                    baseCoin: baseCoin,
                    previousPrice: Math.random() * 1000,
                    lastPrice: Math.random() * 1000,
                    high: Math.random() * 1000,
                    low: Math.random() * 1000,
                    volume: Math.random() * 1000,
                    marketCap: Math.random() * 1000,
                    marked: Math.random() > 0.5,
                });
            });
        });
        this.mockupApiService.onGet(Endpoint.crypto_trading_crypto_pairs()).reply(() => {
            return [200, cryptoPairs];
        });
    }
}