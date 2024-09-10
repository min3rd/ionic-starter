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
            if (index % 2 === 0) {
                cryptoPairs.push({
                    tradingCoin: coin,
                    baseCoin: cryptoCoins[index + 1],
                    previousPrice: Math.random() * 1000,
                    lastPrice: Math.random() * 1000,
                    high: Math.random() * 1000,
                    low: Math.random() * 1000,
                    volume: Math.random() * 1000,
                    marketCap: Math.random() * 1000,
                });
            }
        });
        this.mockupApiService.onGet(Endpoint.crypto_trading_crypto_pairs()).reply(() => {
            return [200, cryptoPairs];
        });
    }
}