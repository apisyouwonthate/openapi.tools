import React from 'react';
import GitHubIcon from './GitHubIcon';
import GitLabIcon from './GitLabIcon';
import GitIcon from './GitIcon';
import NPMIcon from './NPMIcon';
import clsx from 'clsx';

export const RepoIcon = ({repo, ...props}: {repo: string} & React.ComponentPropsWithoutRef<'svg'>) => {
  let repoUrlAdjusted = repo.replace("https://www.", "https://");

  switch (true) {
    case (repoUrlAdjusted.includes('https://github.com')):
      return <GitHubIcon className={clsx("inline-block h-4 w-4 fill-white", props.className)} {...props} />;

    case (repoUrlAdjusted.includes('https://gitlab.com')):
      return <GitLabIcon className={clsx("inline-block h-4 w-4 fill-white", props.className)} {...props} />;

    case (repoUrlAdjusted.includes('https://npm.org') || repoUrlAdjusted.includes('https://npmjs.com')):
      return <NPMIcon className={clsx("inline-block h-6 w-6 fill-white", props.className)} {...props} />;

    default:
      return <GitIcon className={clsx("inline-block h-4 w-4 fill-white", props.className)} {...props} />
  }
}

export default RepoIcon;
