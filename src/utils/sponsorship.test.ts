import { afterEach, describe, expect, it, vi } from 'vitest';
import { getActiveSponsorshipPeriod, isSponsorshipActive } from './sponsorship';

const tool = (
  sponsorship?: Parameters<typeof isSponsorshipActive>[0]['sponsorship']
) => ({ sponsorship }) as Parameters<typeof isSponsorshipActive>[0];

const past = '2020-01-01T00:00:00Z';
const future = '2099-01-01T00:00:00Z';

afterEach(() => {
  vi.useRealTimers();
});

describe('isSponsorshipActive', () => {
  it('returns false when sponsorship is undefined', () => {
    expect(isSponsorshipActive(tool(undefined))).toBe(false);
  });

  it('returns false when sponsorship is empty', () => {
    expect(isSponsorshipActive(tool([]))).toBe(false);
  });

  it('returns true when a period has no endDate (open-ended)', () => {
    expect(isSponsorshipActive(tool([{ startDate: past }]))).toBe(true);
  });

  it('returns true when endDate is in the future', () => {
    expect(
      isSponsorshipActive(tool([{ startDate: past, endDate: future }]))
    ).toBe(true);
  });

  it('returns false when endDate is in the past', () => {
    expect(
      isSponsorshipActive(tool([{ startDate: '2019-01-01', endDate: past }]))
    ).toBe(false);
  });

  it('returns true if any period is active among multiple', () => {
    expect(
      isSponsorshipActive(
        tool([
          { startDate: '2019-01-01', endDate: past },
          { startDate: past, endDate: future },
        ])
      )
    ).toBe(true);
  });

  it('handles Date objects as well as strings', () => {
    expect(
      isSponsorshipActive(
        tool([{ startDate: new Date(past), endDate: new Date(future) }])
      )
    ).toBe(true);
  });
});

describe('getActiveSponsorshipPeriod', () => {
  it('returns null when sponsorship is undefined', () => {
    expect(getActiveSponsorshipPeriod(tool(undefined))).toBeNull();
  });

  it('returns null when sponsorship is empty', () => {
    expect(getActiveSponsorshipPeriod(tool([]))).toBeNull();
  });

  it('returns null when all periods have expired', () => {
    expect(
      getActiveSponsorshipPeriod(
        tool([
          { startDate: '2019-01-01', endDate: past },
          { startDate: '2019-06-01', endDate: '2020-06-01' },
        ])
      )
    ).toBeNull();
  });

  it('returns the open-ended period', () => {
    const openEnded = { startDate: past };
    expect(getActiveSponsorshipPeriod(tool([openEnded]))).toEqual(openEnded);
  });

  it('returns the active period, not an expired one', () => {
    const expired = { startDate: '2019-01-01', endDate: past };
    const active = {
      startDate: past,
      endDate: future,
      url: 'https://example.com',
    };

    expect(getActiveSponsorshipPeriod(tool([expired, active]))).toEqual(active);
  });

  it('returns the first active period when multiple are active', () => {
    const first = {
      startDate: past,
      endDate: future,
      url: 'https://first.com',
    };
    const second = { startDate: past, url: 'https://second.com' };

    expect(getActiveSponsorshipPeriod(tool([first, second]))).toEqual(first);
  });
});
