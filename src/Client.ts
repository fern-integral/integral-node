/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "./environments";
import * as core from "./core";
import { ApiKeys } from "./api/resources/apiKeys/client/Client";
import { ApplicationUser } from "./api/resources/applicationUser/client/Client";
import { Parse } from "./api/resources/parse/client/Client";
import { Tiers } from "./api/resources/tiers/client/Client";

export declare namespace IntegralApiClient {
    interface Options {
        environment?: environments.IntegralApiEnvironment | string;
        apiKey: core.Supplier<string>;
        integralApplicationId: core.Supplier<string>;
    }
}

export class IntegralApiClient {
    constructor(private readonly options: IntegralApiClient.Options) {}

    private _apiKeys: ApiKeys | undefined;

    public get apiKeys(): ApiKeys {
        return (this._apiKeys ??= new ApiKeys(this.options));
    }

    private _applicationUser: ApplicationUser | undefined;

    public get applicationUser(): ApplicationUser {
        return (this._applicationUser ??= new ApplicationUser(this.options));
    }

    private _parse: Parse | undefined;

    public get parse(): Parse {
        return (this._parse ??= new Parse(this.options));
    }

    private _tiers: Tiers | undefined;

    public get tiers(): Tiers {
        return (this._tiers ??= new Tiers(this.options));
    }
}
