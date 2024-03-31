import type { Category } from "src/content/config";

const slugify = (text?: string) => {
  if (!text) return '';
  return text
    .toLowerCase()
    .trim()
    .replace(/&/g, '-and-') // Replace & with 'and'
    .replace(/[\u{1F600}-\u{1F64F}]/gu, '') // remove emojis
    .replace(/[^a-zA-Z0-9]+/g, '-') // Replace all non-alphanumeric characters with a hyphen
    .replace(/^-+|-+$/g, ''); // Remove leading and trailing hyphens
};

type UTMParameterGeneratorProps = {
  url: string;
  category?: Category;
  linkPlacementDescription?: string;
};

/**
 * Generate a URL with UTM parameters
 * @param {UTMParameterGeneratorProps} props - The props object, which contains
 *
 * @param {string} props.url - The URL to add UTM parameters to
 * @param {string} props.category - The category of the tool
 * @param {string} props.linkPlacementDescription - The description of where the link is placed. This will be slugified and used as the utm_content parameter
 */
export const generateUrlWithUTM = ({url, category, linkPlacementDescription } :UTMParameterGeneratorProps ) => {
  const oldUrl = new URL(url);

  const utmParameters = {
    utm_source: 'openapi-tools',
    utm_medium: 'website',
    utm_campaign: slugify(category?.name),
    // utm_term: , current page's search terms
    utm_content: slugify(linkPlacementDescription),
  };

  // make an object out of the old url's query string using the URL class
  const oldUrlParams = Object.fromEntries(oldUrl.searchParams.entries());

  // make a new URL using the URL class, and merging the params from the old url with our UTM parameters
  const newUrl = new URL(oldUrl.href);

  const newParams: Record<string, string> = {
    ...oldUrlParams,
    ...utmParameters,
  };

  // set the search params of the new URL
  newUrl.search = new URLSearchParams(newParams).toString();

  // send back our shiny new URL
  return newUrl.href;
};

export default generateUrlWithUTM;
