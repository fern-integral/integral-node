/**
 * This file was auto-generated by Fern from our API Definition.
 */

export const Environment = {
  Production: "https://api.integralapi.co/public",
  Local: "http://localhost:4000/",
} as const;

export type Environment = typeof Environment.Production | typeof Environment.Local;
