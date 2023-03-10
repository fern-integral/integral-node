/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { IntegralApi } from "@integralapi/node";
import * as core from "../../../../core";

export const ParseApiRequestResponse: core.serialization.ObjectSchema<
    serializers.ParseApiRequestResponse.Raw,
    IntegralApi.ParseApiRequestResponse
> = core.serialization.object({
    apiKey: core.serialization.lazyObject(async () => (await import("../../..")).ApiKeyParseResponse),
    statusCode: core.serialization.number(),
    user: core.serialization.lazyObject(async () => (await import("../../..")).UserParseResponse),
    application: core.serialization.lazyObject(async () => (await import("../../..")).ApplicationParseResponse),
    returnBackToUser: core.serialization.lazyObject(async () => (await import("../../..")).ReturnBackToUserResponse),
});

export declare namespace ParseApiRequestResponse {
    interface Raw {
        apiKey: serializers.ApiKeyParseResponse.Raw;
        statusCode: number;
        user: serializers.UserParseResponse.Raw;
        application: serializers.ApplicationParseResponse.Raw;
        returnBackToUser: serializers.ReturnBackToUserResponse.Raw;
    }
}
