import { Fragment } from 'react';
import clsx from 'clsx';
import { Highlight } from 'prism-react-renderer';

import { Button } from './Button';
import { HeroBackground } from './HeroBackground';
import Sponsor from './Sponsor';

const codeLanguage = 'json';
const code = `{
  "openapi": "3.1.0",
  "info": {
    "title": "Train Travel API",
    "description": "Find and book train trips.",
    "version": "1.0.0",
    "contact": {
      "name": "Train Support",
      "url": "https://example.com/support",
      "email": "support@example.com"
    },
  },
}`;

const tabs = [
  { name: 'openapi.yaml', isActive: true },
  { name: 'README.md', isActive: false },
];

function TrafficLightsIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg aria-hidden="true" viewBox="0 0 42 10" fill="none" {...props}>
      <circle cx="5" cy="5" r="4.5" />
      <circle cx="21" cy="5" r="4.5" />
      <circle cx="37" cy="5" r="4.5" />
    </svg>
  );
}

export function Hero() {
  return (
    <div className="mb-10 overflow-hidden bg-slate-900 dark:-mb-32 dark:mt-[-4.75rem] dark:pb-32 dark:pt-[4.75rem]">
      <div className="flex flex-col gap-4 py-16 sm:px-2 lg:relative lg:px-0 lg:py-20">
        <div className="lg:max-w-8xl mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 lg:grid-cols-2 lg:px-8 xl:gap-x-16 xl:px-12">
          <div className="relative z-10 md:text-center lg:text-left">
            <img
              className="absolute bottom-full right-full -mb-56 -mr-72 opacity-50"
              src="images/blur-cyan.png"
              alt=""
              width={530}
              height={530}
            />
            <div className="relative">
              <p className="font-display inline bg-gradient-to-r from-green-200 via-green-400 to-green-200 bg-clip-text text-5xl font-bold tracking-tight text-transparent">
                Tools for working wih OpenAPI specs
              </p>
              <p className="mt-3 text-2xl tracking-tight text-gray-400">
                A community-driven, open source project from <br />
                <a
                  href="https://apisyouwonthate.com"
                  target="_blank"
                  className="font-medium text-green-200/80 transition-all hover:text-green-200 hover:underline"
                >
                  APIs You Won't Hate.
                </a>
              </p>
              <div className="mt-8 flex gap-4 md:justify-center lg:justify-start">
                <Button
                  href="https://github.com/apisyouwonthate/openapi.tools/blob/main/CONTRIBUTING.md"
                  target="_blank"
                  variant="primary"
                >
                  Contribute
                </Button>
                <Button
                  variant="secondary"
                  target="_blank"
                  href="https://github.com/apisyouwonthate/openapi.tools"
                >
                  View on GitHub
                </Button>
              </div>
            </div>
          </div>
          <div className="relative lg:static xl:pl-10">
            <div className="absolute inset-x-[-50vw] -bottom-48 -top-32 [mask-image:linear-gradient(transparent,white,white)] lg:-bottom-32 lg:-top-32 lg:left-[calc(50%+14rem)] lg:right-0 lg:[mask-image:none] dark:[mask-image:linear-gradient(transparent,white,transparent)] lg:dark:[mask-image:linear-gradient(white,white,transparent)]">
              <HeroBackground className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 lg:left-0 lg:translate-x-0 lg:translate-y-[-60%]" />
            </div>
            <div className="relative">
              <img
                className="absolute -right-64 -top-64"
                src={'images/blur-cyan.png'}
                alt=""
                width={530}
                height={530}
              />
              <img
                className="absolute -bottom-40 -right-44"
                src={'images/blur-indigo.png'}
                alt=""
                width={567}
                height={567}
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-sky-300 via-sky-300/70 to-blue-300 opacity-10 blur-lg" />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-sky-300 via-sky-300/70 to-blue-300 opacity-10" />
              <div className="relative rounded-2xl bg-[#0A101F]/80 ring-1 ring-white/10 backdrop-blur">
                <div className="absolute -top-px left-20 right-11 h-px bg-gradient-to-r from-sky-300/0 via-sky-300/70 to-sky-300/0" />
                <div className="absolute -bottom-px left-11 right-20 h-px bg-gradient-to-r from-blue-400/0 via-blue-400 to-blue-400/0" />
                <div className="pl-4 pt-4">
                  <TrafficLightsIcon className="h-2.5 w-auto stroke-slate-500/30" />
                  <div className="mt-4 flex space-x-2 text-xs">
                    {tabs.map((tab) => (
                      <div
                        key={tab.name}
                        className={clsx(
                          'flex h-6 rounded-full',
                          tab.isActive
                            ? 'bg-gradient-to-r from-sky-400/30 via-sky-400 to-sky-400/30 p-px font-medium text-sky-300'
                            : 'text-slate-500'
                        )}
                      >
                        <div
                          className={clsx(
                            'flex items-center rounded-full px-2.5',
                            tab.isActive && 'bg-slate-800'
                          )}
                        >
                          {tab.name}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 flex items-start px-1 text-sm">
                    <div
                      aria-hidden="true"
                      className="select-none border-r border-slate-300/5 pr-4 font-mono text-slate-600"
                    >
                      {Array.from({
                        length: code.split('\n').length,
                      }).map((_, index) => (
                        <Fragment key={index}>
                          {(index + 1).toString().padStart(2, '0')}
                          <br />
                        </Fragment>
                      ))}
                    </div>
                    <Highlight
                      code={code}
                      language={codeLanguage}
                      theme={{ plain: {}, styles: [] }}
                    >
                      {({
                        className,
                        style,
                        tokens,
                        getLineProps,
                        getTokenProps,
                      }) => (
                        <pre
                          className={clsx(
                            className,
                            'flex overflow-x-auto pb-6',
                            'text-green-200/80'
                          )}
                          style={style}
                        >
                          <code className="px-4">
                            {tokens.map((line, lineIndex) => (
                              <div key={lineIndex} {...getLineProps({ line })}>
                                {line.map((token, tokenIndex) => (
                                  <span
                                    key={tokenIndex}
                                    {...getTokenProps({ token })}
                                  />
                                ))}
                              </div>
                            ))}
                          </code>
                        </pre>
                      )}
                    </Highlight>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
