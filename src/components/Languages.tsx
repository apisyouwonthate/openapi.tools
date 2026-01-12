import React from 'react';

import { clsxm } from '@/utils/clsxm';
import { getDeviconClassName } from '@/utils/languageUtils';

type LanguagesProps = {
  languages: Record<string, boolean>;
};

const Languages: React.FC<LanguagesProps> = ({ languages }) => {
  if (!languages) return null;
  // return nothing if there are no languages
  if (!Object.keys(languages).length) {
    return null;
  }

  return (
    <section>
      <h2 className="m-0 text-sm uppercase">Languages supported</h2>
      <ul className="m-0 flex list-none flex-row gap-2 p-0">
        {Object.keys(languages).map((language) => (
          <li
            key={language}
            className="inline-flex h-10 w-10 items-center justify-center rounded bg-green-600 p-1 select-none hover:scale-105"
            title={language}
          >
            <i
              className={clsxm(
                'text-xl text-white',
                `devicon-${getDeviconClassName(language)}-plain`
              )}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Languages;
