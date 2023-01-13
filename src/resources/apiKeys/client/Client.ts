/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../environments";
import * as core from "../../../core";
import { IntegralApi } from "@integralapi/node";
import urlJoin from "url-join";
import * as serializers from "../../../serialization";

export declare namespace Client {
  interface Options {
    environment?: environments.IntegralApiEnvironment | string;
    authentication?: core.Supplier<string>;
  }
}

export class Client {
  constructor(private readonly options: Client.Options) {}

  public async generate(request?: IntegralApi.GenereateApiKeyRequest): Promise<IntegralApi.apiKeys.generate.Response> {
    const _response = await core.fetcher({
      url: urlJoin(this.options.environment ?? environments.IntegralApiEnvironment.Production, "/key/create"),
      method: "POST",
      headers: {
        Authentication: await core.Supplier.get(this.options.authentication),
      },
      body: await serializers.apiKeys.generate.Request.json({
        applicationUserForeignId: request?.applicationUserForeignId,
        description: request?.description,
      }),
    });
    if (_response.ok) {
      return {
        ok: true,
        body: await serializers.apiKeys.generate.Response.parse(
          _response.body as serializers.apiKeys.generate.Response.Raw
        ),
      };
    }

    return {
      ok: false,
      error: IntegralApi.apiKeys.generate.Error._unknown(_response.error),
    };
  }

  public async revoke(request: IntegralApi.RevokeApiKeyRequest): Promise<IntegralApi.apiKeys.revoke.Response> {
    const _response = await core.fetcher({
      url: urlJoin(this.options.environment ?? environments.IntegralApiEnvironment.Production, "/keys/revoke"),
      method: "DELETE",
      headers: {
        Authentication: await core.Supplier.get(this.options.authentication),
      },
      body: await serializers.apiKeys.revoke.Request.json({
        apiKey: request.apiKey,
      }),
    });
    if (_response.ok) {
      return {
        ok: true,
        body: await serializers.apiKeys.revoke.Response.parse(
          _response.body as serializers.apiKeys.revoke.Response.Raw
        ),
      };
    }

    return {
      ok: false,
      error: IntegralApi.apiKeys.revoke.Error._unknown(_response.error),
    };
  }
}
