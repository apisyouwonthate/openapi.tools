import { isAfter } from 'date-fns';
import type { Tool } from 'src/content.config';

type SponsorshipPeriod = {
  startDate: Date | string;
  endDate?: Date | string | null;
  url?: string;
  testimonial?: string;
};

/**
 * Check if a tool has any currently active sponsorship period
 * Returns true if any sponsorship period has no endDate or endDate is in the future
 * Handles both Date objects (from Astro) and ISO strings (from serialized data)
 */
const isActivePeriod = (period: SponsorshipPeriod): boolean => {
  if (!period.endDate) return true;
  return isAfter(new Date(period.endDate), new Date());
};

/**
 * Check if a tool has any currently active sponsorship period
 * Returns true if any sponsorship period has no endDate or endDate is in the future
 * Handles both Date objects (from Astro) and ISO strings (from serialized data)
 */
export const isSponsorshipActive = (
  tool: Tool | { sponsorship?: SponsorshipPeriod[] }
): boolean => {
  const sponsorship = tool?.sponsorship;
  if (!sponsorship || !Array.isArray(sponsorship) || sponsorship.length === 0) {
    return false;
  }
  return sponsorship.some(isActivePeriod);
};

/**
 * Get the currently active sponsorship period, if any
 * Handles both Date objects (from Astro) and ISO strings (from serialized data)
 */
export const getActiveSponsorshipPeriod = (
  tool: Tool | { sponsorship?: SponsorshipPeriod[] }
) => {
  const sponsorship = tool?.sponsorship;
  if (!sponsorship || !Array.isArray(sponsorship) || sponsorship.length === 0) {
    return null;
  }
  return sponsorship.find(isActivePeriod) ?? null;
};

