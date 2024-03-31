import React, { Suspense, useCallback, useState } from 'react';
import { Dialog } from '@headlessui/react';

import type { NavigationProps } from '@/layouts/Layout.astro';
import Link from './Link';
import { Logomark } from './Logo';
import { Navigation } from './Navigation';

function MenuIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      {...props}
    >
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

function CloseIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      {...props}
    >
      <path d="M5 5l14 14M19 5l-14 14" />
    </svg>
  );
}

function CloseOnNavigation({ close }: { close: () => void }) {
  document.addEventListener('astro:after-swap', () => {
    close();
  });
  return null;
}

export function MobileNavigation({ categories, currentUrl }: NavigationProps) {
  let [isOpen, setIsOpen] = useState(false);
  let close = useCallback(() => setIsOpen(false), [setIsOpen]);

  function onLinkClick(event: React.MouseEvent<HTMLAnchorElement>) {
    let link = event.currentTarget;
    if (
      link.pathname + link.search + link.hash ===
      window.location.pathname + window.location.search + window.location.hash
    ) {
      close();
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="relative"
        ariaLabel="Open navigation"
      >
        <MenuIcon className="h-6 w-6 stroke-slate-500" />
      </button>
      <Suspense fallback={null}>
        <CloseOnNavigation close={close} />
      </Suspense>
      <Dialog
        open={isOpen}
        onClose={() => close()}
        className="fixed inset-0 z-50 flex items-start overflow-y-auto bg-slate-900/50 pr-10 backdrop-blur lg:hidden"
        ariaLabel="Navigation"
      >
        <Dialog.Panel className="min-h-full w-full max-w-xs bg-white px-4 pb-12 pt-5 sm:px-6 dark:bg-slate-900">
          <div className="flex items-center">
            <button
              type="button"
              onClick={() => close()}
              ariaLabel="Close navigation"
            >
              <CloseIcon className="h-6 w-6 stroke-slate-500" />
            </button>
            <Link href="/" className="ml-6" ariaLabel="Home page">
              <Logomark className="h-9 w-9" />
            </Link>
          </div>
          <Navigation
            className="mt-5 px-1"
            onLinkClick={onLinkClick}
            categories={categories}
            currentUrl={currentUrl}
          />
        </Dialog.Panel>
      </Dialog>
    </>
  );
}
