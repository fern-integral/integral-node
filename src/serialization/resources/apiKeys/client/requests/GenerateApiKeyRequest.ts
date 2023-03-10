/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../..";
import { IntegralApi } from "@integralapi/node";
import * as core from "../../../../../core";

export const GenerateApiKeyRequest: core.serialization.Schema<
    serializers.GenerateApiKeyRequest.Raw,
    IntegralApi.GenerateApiKeyRequest
> = core.serialization.object({
    applicationUserForeignId: core.serialization.string(),
    description: core.serialization.string().optional(),
    isSandbox: core.serialization.boolean().optional(),
});

export declare namespace GenerateApiKeyRequest {
    interface Raw {
        applicationUserForeignId: string;
        description?: string | null;
        isSandbox?: boolean | null;
    }
}
