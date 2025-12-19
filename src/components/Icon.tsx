import React, { useId } from 'react';
import clsx from 'clsx';

import { InstallationIcon } from './icons/InstallationIcon';
import { LightbulbIcon } from './icons/LightbulbIcon';
import { PluginsIcon } from './icons/PluginsIcon';
import { PresetsIcon } from './icons/PresetsIcon';
import { ThemingIcon } from './icons/ThemingIcon';
import { WarningIcon } from './icons/WarningIcon';

export const icons = {
  installation: InstallationIcon,
  presets: PresetsIcon,
  plugins: PluginsIcon,
  theming: ThemingIcon,
  lightbulb: LightbulbIcon,
  warning: WarningIcon,
};

export type IconVariants = keyof typeof icons;

const iconStyles = {
  blue: '[--icon-foreground:theme(colors.slate.900)] [--icon-background:theme(colors.white)]',
  amber:
    '[--icon-foreground:theme(colors.amber.900)] [--icon-background:theme(colors.amber.100)]',
  emerald:
    '[--icon-foreground:theme(colors.emerald.900)] [--icon-background:theme(colors.emerald.100)]',
  green:
    '[--icon-foreground:theme(colors.green.900)] [--icon-background:theme(colors.green.100)]',
};

export function Icon({
  icon,
  color = 'green',
  className,
  ...props
}: {
  color?: keyof typeof iconStyles;
  icon: IconVariants;
} & Omit<React.ComponentPropsWithoutRef<'svg'>, 'color'>) {
  const id = useId();

  const IconComponent = icons[icon];

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 32 32"
      fill="none"
      className={clsx(className, iconStyles[color])}
      {...props}
    >
      <IconComponent id={id} color={color} />
    </svg>
  );
}
