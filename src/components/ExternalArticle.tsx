import React from 'react';
import type { OgObject } from 'node_modules/open-graph-scraper/types/lib/types';

import Link from './Link';

type FeaturedArticle = {
  title?: string;
  url?: string;
  date?: Date;
} & Partial<OgObject>;

const ExternalArticle: React.FC<FeaturedArticle> = (props) => {
  const { url, ogImage, ogDate } = props;

  const title = props.title ?? props.ogTitle ?? props.twitterTitle;

  const author =
    props.author ??
    props.articleAuthor ??
    props.ogArticleAuthor ??
    props.bookAuthor;

  const description =
    props.ogDescription ?? props.dcDescription ?? props.twitterDescription;

  let postDate: Date | undefined = undefined;
  if (props.date) {
    postDate = props.date;
  } else {
    if (ogDate) {
      postDate = new Date(ogDate);
    }
  }

  return (
    <article className="flex flex-col items-start justify-between">
      <div className="relative w-full">
        {ogImage && ogImage.length > 0 && (
          <img
            src={ogImage[0].url}
            alt={ogImage[0].alt || title || 'Article image'}
            className="w-full bg-gray-100 object-cover"
          />
        )}
      </div>
      <div className="max-w-xl">
        <div className="mt-2 flex items-center gap-x-2 text-xs">
          {postDate && (
            <time
              dateTime={postDate.toISOString()}
              className="text-gray-500"
            >
              {postDate.toLocaleDateString()}
            </time>
          )}
        </div>
        <div className="group relative">
          <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
            <Link href={url} className="font-medium no-underline">
              <span className="absolute inset-0" />
              {title}
            </Link>
          </h3>
          <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
            {description}
          </p>
        </div>
        <div className="relative mt-8 flex items-center gap-x-4">
          {author && (
            <div className="text-sm leading-6">
              <p className="font-semibold text-gray-900">
                {author}
              </p>
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

export default ExternalArticle;
