import React from 'react';
import clsx from 'clsx';

import GitHubIcon from './GitHubIcon';
import GitIcon from './GitIcon';
import GitLabIcon from './GitLabIcon';
import NPMIcon from './NPMIcon';

export const RepoIcon = ({
  repo,
  ...props
}: { repo: string } & React.ComponentPropsWithoutRef<'svg'>) => {
  const repoUrlAdjusted = repo.replace('https://www.', 'https://');

  switch (true) {
    case repoUrlAdjusted.includes('https://github.com'):
      return (
        <GitHubIcon
          className={clsx('inline-block h-4 w-4', props.className)}
          {...props}
        />
      );

    case repoUrlAdjusted.includes('https://gitlab.com'):
      return (
        <GitLabIcon
          className={clsx('inline-block h-4 w-4', props.className)}
          {...props}
        />
      );

    case repoUrlAdjusted.includes('https://npm.org') ||
      repoUrlAdjusted.includes('https://npmjs.com'):
      return (
        <NPMIcon
          className={clsx('inline-block h-6 w-6', props.className)}
          {...props}
        />
      );

    default:
      return (
        <GitIcon
          className={clsx('inline-block h-4 w-4', props.className)}
          {...props}
        />
      );
  }
};

export default RepoIcon;
