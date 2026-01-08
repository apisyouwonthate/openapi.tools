import type { Tool } from 'src/content/config';

/**
 * Check if a tool supports modern OpenAPI versions (v3.1 or v3.2)
 */
export function isModern(tool: Tool): boolean {
  const v = tool.oasVersions;
  return !!(v?.v3_2 || v?.v3_1);
}

/**
 * Check if a tool only supports legacy OpenAPI versions (v2.0 or v3.0, but NOT v3.1 or v3.2)
 */
export function isLegacy(tool: Tool): boolean {
  const v = tool.oasVersions;
  const hasLegacyVersion = !!(v?.v3 || v?.v2);
  const hasModernVersion = !!(v?.v3_2 || v?.v3_1);
  return hasLegacyVersion && !hasModernVersion;
}

/**
 * Check if a tool supports any OpenAPI version at all
 */
export function supportsOpenAPI(tool: Tool): boolean {
  const v = tool.oasVersions;
  return !!(v?.v2 || v?.v3 || v?.v3_1 || v?.v3_2);
}
