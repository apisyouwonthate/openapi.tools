import React from 'react';
import clsx from 'clsx';

import type { NavigationProps } from '@/layouts/Layout.astro';
import Link from './Link';

export type NavigationItem = {
  title: string;
  description?: string;
  href: string;
};

export type NavigationCategory = {
  title: string;
  links: NavigationItem[];
};

export type NavigationItems = NavigationCategory[];

export function Navigation({
  className,
  onLinkClick,
  categories,
  currentUrl,
}: NavigationProps & {
  className?: string;
  onLinkClick?: React.MouseEventHandler<HTMLAnchorElement>;
}) {
  const { pathname } = currentUrl;

  const linkStandardColors =
    'text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-600 hover:before:block dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300';

  return (
    <>
      <nav className={clsx('text-base lg:text-sm', className)}>
        <ul className="space-y-9">
          {categories?.map((category) => (
            <li key={category.title}>
              <h2 className="font-display font-medium text-slate-900">
                {category.title}
              </h2>
              <ul className="mt-2 space-y-2 border-l-2 border-slate-100 lg:mt-4 lg:space-y-4 lg:border-slate-200 dark:border-slate-800">
                {category.links?.map((link) => (
                  <li
                    key={link.href}
                    className="relative"
                    title={link.description}
                  >
                    <Link
                      href={link.href}
                      onClick={onLinkClick}
                      className={clsx(
                        'block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full',
                        link.href === pathname
                          ? 'font-semibold text-emerald-500 before:bg-emerald-500'
                          : linkStandardColors
                      )}
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        <footer
          className={clsx('mt-6 flex flex-col gap-2', linkStandardColors)}
        >
          <div>
            &copy; {new Date().getFullYear()}{' '}
            <Link
              className="font-semibold hover:text-green-700 hover:underline"
              href="https://apisyouwonthate.com"
              target="_blank"
            >
              APIs You Won't Hate
            </Link>
          </div>

          <div>
            Get in touch to become a{' '}
            <Link className="hover:underline" href="/sponsor">
              Sponsor
            </Link>
            .
          </div>

          <div>
            This site is{' '}
            <Link
              className="hover:underline"
              href="https://github.com/apisyouwonthate/openapi.tools"
              target="_blank"
            >
              community-driven and OSS
            </Link>
            .
          </div>

          <div>
            Built wih <Link href="https://astro.build">Astro</Link> and hosted
            on <Link href="https://vercel.com">Vercel</Link>.
          </div>
        </footer>
      </nav>
    </>
  );
}
