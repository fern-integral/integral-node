/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../..";
import { IntegralApi } from "@integralapi/node";
import * as core from "../../../../../core";

export const PauseApiKeyRequest: core.serialization.Schema<
    serializers.PauseApiKeyRequest.Raw,
    IntegralApi.PauseApiKeyRequest
> = core.serialization.object({
    apiKey: core.serialization.string(),
});

export declare namespace PauseApiKeyRequest {
    interface Raw {
        apiKey: string;
    }
}
