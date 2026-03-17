function parseOrigin(value?: string | null): string | null {
  if (!value) {
    return null;
  }

  try {
    return new URL(value).origin;
  } catch {
    return null;
  }
}

export function resolveAppBaseUrl(
  requestUrl: string,
  originHeader?: string | null,
  refererHeader?: string | null
): string {
  const origin = parseOrigin(originHeader);
  if (origin) {
    return origin;
  }

  const refererOrigin = parseOrigin(refererHeader);
  if (refererOrigin) {
    return refererOrigin;
  }

  return new URL(requestUrl).origin;
}
