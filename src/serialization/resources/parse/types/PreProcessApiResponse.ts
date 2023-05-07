/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { IntegralApi } from "@integralapi/node";
import * as core from "../../../../core";

export const PreProcessApiResponse: core.serialization.ObjectSchema<
    serializers.PreProcessApiResponse.Raw,
    IntegralApi.PreProcessApiResponse
> = core.serialization.object({
    request: core.serialization.lazyObject(async () => (await import("../../..")).RequestPreProcessResponse),
    statusCode: core.serialization.number(),
    user: core.serialization.lazyObject(async () => (await import("../../..")).UserParseResponse),
    application: core.serialization.lazyObject(async () => (await import("../../..")).ApplicationParseResponse),
    returnBackToUser: core.serialization
        .lazy(async () => (await import("../../..")).ReturnBackToUserUnionType)
        .optional(),
});

export declare namespace PreProcessApiResponse {
    interface Raw {
        request: serializers.RequestPreProcessResponse.Raw;
        statusCode: number;
        user: serializers.UserParseResponse.Raw;
        application: serializers.ApplicationParseResponse.Raw;
        returnBackToUser?: serializers.ReturnBackToUserUnionType.Raw | null;
    }
}
