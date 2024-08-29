import { Injectable } from "@angular/core";
import { MockApi } from "../mock-api";
import { Endpoint } from "../../constants/endpoint";
import { adminCredential, user, userCredential } from "./data";
import { Utf8 } from "crypto-es/lib/core";
import { HmacSHA256 } from "crypto-es/lib/sha256";
import { Base64 } from "crypto-es/lib/enc-base64";

@Injectable({
    providedIn: 'root'
})
export class AuthMockApi extends MockApi {
    private _secret: string = "THIS IS SECRET KEY";
    override registerHandlers(): void {
        this.mockupApiService.onPost(Endpoint.auth_signin()).reply(({ request }) => {
            const { email, password } = request.body;
            if (email === adminCredential.email && password === adminCredential.password) {
                return [200, {
                    user: user,
                    accessToken: this._generateJWTToken(['admin']),
                }];
            } else if (email === userCredential.email && password === userCredential.password) {
                return [200, {
                    user: user,
                    accessToken: this._generateJWTToken(['user']),
                }];
            }
            return [400, false];
        });
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Private methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Return base64 encoded version of the given string
     *
     * @param source
     * @private
     */
    private _base64url(source: any): string {
        // Encode in classical base64
        let encodedSource = Base64.stringify(source);

        // Remove padding equal characters
        encodedSource = encodedSource.replace(/=+$/, '');

        // Replace characters according to base64url specifications
        encodedSource = encodedSource.replace(/\+/g, '-');
        encodedSource = encodedSource.replace(/\//g, '_');

        // Return the base64 encoded string
        return encodedSource;
    }

    /**
     * Generates a JWT token using CryptoJS library.
     *
     * This generator is for mocking purposes only and it is NOT
     * safe to use it in production frontend applications!
     *
     * @private
     */
    private _generateJWTToken(authorities: string[] = []): string {
        // Define token header
        const header = {
            alg: 'HS256',
            typ: 'JWT',
        };

        // Calculate the issued at and expiration dates
        const date = new Date();
        const iat = Math.floor(date.getTime() / 1000);
        const exp = Math.floor(date.setDate(date.getDate() + 7) / 1000);

        // Define token payload
        const payload = {
            iat: iat,
            iss: 'vn9melody',
            exp: exp,
            authorities: authorities,
        };

        // Stringify and encode the header
        const stringifiedHeader = Utf8.parse(JSON.stringify(header));
        const encodedHeader = this._base64url(stringifiedHeader);

        // Stringify and encode the payload
        const stringifiedPayload = Utf8.parse(JSON.stringify(payload));
        const encodedPayload = this._base64url(stringifiedPayload);

        // Sign the encoded header and mock-api
        let signature: any = encodedHeader + '.' + encodedPayload;
        signature = HmacSHA256(signature, this._secret);
        signature = this._base64url(signature);

        // Build and return the token
        return encodedHeader + '.' + encodedPayload + '.' + signature;
    }

}