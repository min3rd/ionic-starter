import { Base } from "src/app/core/base/base.types";

export interface CryptoCoin extends Base {
    title?: string;
    shortName?: string;
    icon?: string;
    supportUrl?: string;
};

export interface CryptoPair extends Base {
    tradingCoin?: CryptoCoin;
    baseCoin?: CryptoCoin;
    previousPrice?: number;
    lastPrice?: number;
    high?: number;
    low?: number
    volume?: number;
    marketCap?: number;
};

export interface TradePrice extends Base {
    date?: Date;
    open?: number;
    high?: number;
    low?: number;
    close?: number;
};