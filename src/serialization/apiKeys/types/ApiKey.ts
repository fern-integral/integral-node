/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../..";
import { IntegralApi } from "@integralapi/node";
import * as core from "../../../core";

export const ApiKey: core.schemas.ObjectSchema<serializers.ApiKey.Raw, IntegralApi.ApiKey> = core.schemas.object({
  id: core.schemas.string(),
  createdAt: core.schemas.string(),
  updatedAt: core.schemas.string(),
  deletedAt: core.schemas.string(),
  apiKey: core.schemas.string(),
  isPaused: core.schemas.boolean(),
  isRevoked: core.schemas.boolean(),
  isRotatedOff: core.schemas.boolean(),
  numOfRequest: core.schemas.number(),
  firstTimeRequest: core.schemas.string(),
  applicationUser: core.schemas.lazyObject(async () => (await import("../..")).ApplicationUser),
});

export declare namespace ApiKey {
  interface Raw {
    id: string;
    createdAt: string;
    updatedAt: string;
    deletedAt: string;
    apiKey: string;
    isPaused: boolean;
    isRevoked: boolean;
    isRotatedOff: boolean;
    numOfRequest: number;
    firstTimeRequest: string;
    applicationUser: serializers.ApplicationUser.Raw;
  }
}
