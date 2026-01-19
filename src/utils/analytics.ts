/**
 * PostHog Analytics Utility
 *
 * Typed functions for tracking user behavior and tool engagement.
 * All functions safely check for PostHog availability before tracking.
 */

declare global {
  interface Window {
    posthog?: {
      capture: (event: string, properties?: Record<string, unknown>) => void;
    };
  }
}

// Event property types
type ToolPageViewProps = {
  tool_slug: string;
  tool_name: string;
  categories: string[];
  is_sponsored: boolean;
  oas_versions: {
    v2?: boolean;
    v3?: boolean;
    v3_1?: boolean;
    v3_2?: boolean;
  };
};

type OutboundClickProps = {
  url: string;
  tool_slug?: string;
  tool_name?: string;
  link_type:
    | 'website'
    | 'repo'
    | 'sponsor_banner'
    | 'featured_article'
    | 'sponsor_link'
    | 'other';
  is_sponsored: boolean;
  placement: string;
};

type SponsorshipCTAProps = {
  cta_type:
    | 'banner_click'
    | 'sponsor_page_visit'
    | 'sponsor_page_link'
    | 'become_sponsor_link';
  source_page: string;
  sponsor_name?: string;
};

type FilterAppliedProps = {
  filter_type: 'language' | 'platform';
  filter_value: string;
  action: 'added' | 'removed' | 'cleared';
  total_results: number;
};

type FeaturedArticleClickProps = {
  tool_slug: string;
  article_title: string;
  article_url: string;
};

type ScrollDepthProps = {
  page_path: string;
  max_depth_percent: 25 | 50 | 75 | 100;
  tool_slug?: string;
};

// Helper to safely capture events
function capture(event: string, properties: Record<string, unknown>): void {
  if (typeof window !== 'undefined' && window.posthog) {
    window.posthog.capture(event, properties);
  }
}

// Event tracking functions
export function trackToolPageView(props: ToolPageViewProps): void {
  capture('tool_page_view', props);
}

export function trackOutboundClick(props: OutboundClickProps): void {
  capture('outbound_link_click', props);
}

export function trackSponsorshipCTA(props: SponsorshipCTAProps): void {
  capture('sponsorship_cta_click', props);
}

export function trackFilterApplied(props: FilterAppliedProps): void {
  capture('filter_applied', props);
}

export function trackFeaturedArticleClick(
  props: FeaturedArticleClickProps
): void {
  capture('featured_article_click', props);
}

export function trackScrollDepth(props: ScrollDepthProps): void {
  capture('scroll_depth', props);
}

// Export types for use in components
export type {
  ToolPageViewProps,
  OutboundClickProps,
  SponsorshipCTAProps,
  FilterAppliedProps,
  FeaturedArticleClickProps,
  ScrollDepthProps,
};
