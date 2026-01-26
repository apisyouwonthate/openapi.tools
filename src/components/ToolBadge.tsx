import type { Badge } from '@/content.config';

interface ToolBadgeProps {
  badge: Badge;
}

const variantStyles = {
  gold: 'bg-gradient-to-br from-yellow-100 to-amber-200 dark:from-yellow-900/30 dark:to-amber-800/30 border-yellow-400 dark:border-yellow-600 text-yellow-900 dark:text-yellow-200',
  silver:
    'bg-gradient-to-br from-gray-100 to-slate-200 dark:from-gray-800/30 dark:to-slate-700/30 border-gray-400 dark:border-gray-600 text-gray-900 dark:text-gray-200',
  bronze:
    'bg-gradient-to-br from-orange-100 to-amber-200 dark:from-orange-900/30 dark:to-amber-800/30 border-orange-400 dark:border-orange-600 text-orange-900 dark:text-orange-200',
  blue: 'bg-gradient-to-br from-blue-100 to-sky-200 dark:from-blue-900/30 dark:to-sky-800/30 border-blue-400 dark:border-blue-600 text-blue-900 dark:text-blue-200',
};

export default function ToolBadge({ badge }: ToolBadgeProps) {
  const variantClass = variantStyles[badge.variant || 'blue'];

  return (
    <div
      className={`group relative inline-flex items-center gap-2 rounded-lg border-2 px-3 py-2 transition-all hover:scale-105 ${variantClass}`}
      title={badge.description}
    >
      {badge.icon && <span className="text-lg">{badge.icon}</span>}
      <div className="flex flex-col">
        <span className="text-sm leading-tight font-semibold">
          {badge.name}
        </span>
      </div>

      {/* Tooltip */}
      <div className="pointer-events-none absolute -top-12 left-1/2 z-10 -translate-x-1/2 rounded-md bg-slate-900 px-3 py-1.5 text-xs whitespace-nowrap text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100 dark:bg-slate-700">
        {badge.description}
        <div className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 bg-slate-900 dark:bg-slate-700" />
      </div>
    </div>
  );
}
