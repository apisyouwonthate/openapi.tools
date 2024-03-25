type BadgeProps = {
  variant:
    | 'gray'
    | 'red'
    | 'yellow'
    | 'green'
    | 'blue'
    | 'indigo'
    | 'purple'
    | 'pink';
  children: React.ReactNode;
  showDot?: boolean;
};
const Badge: React.FC<BadgeProps> = ({
  variant,
  children,
  showDot = false,
}) => {
  let badgeClasses;
  let dotClasses;

  switch (variant) {
    case 'gray':
      badgeClasses = 'bg-gray-100 text-gray-600';
      dotClasses = 'fill-gray-400';
      break;
    case 'red':
      badgeClasses = 'bg-red-100 text-red-700';
      dotClasses = 'fill-red-500';
      break;
    case 'yellow':
      badgeClasses = 'bg-yellow-100 text-yellow-800';
      dotClasses = 'fill-yellow-500';
      break;
    case 'green':
      badgeClasses = 'bg-green-100 text-green-700';
      dotClasses = 'fill-green-500';
      break;
    case 'blue':
      badgeClasses = 'bg-blue-100 text-blue-700';
      dotClasses = 'fill-blue-500';
      break;
    case 'indigo':
      badgeClasses = 'bg-indigo-100 text-indigo-700';
      dotClasses = 'fill-indigo-500';
      break;
    case 'purple':
      badgeClasses = 'bg-purple-100 text-purple-700';
      dotClasses = 'fill-purple-500';
      break;
    case 'pink':
      badgeClasses = 'bg-pink-100 text-pink-700';
      dotClasses = 'fill-pink-500';
      break;
  }

  return (
    <span
      className={`inline-flex items-center gap-x-1.5 rounded-md px-1.5 py-0.5 text-xs font-medium ${badgeClasses}`}
    >
      {showDot && (
        <svg className="h-1.5 w-1.5" viewBox="0 0 6 6" aria-hidden="true">
          <circle cx={3} cy={3} r={3} className={dotClasses} />
        </svg>
      )}
      {children}
    </span>
  );
};

export default Badge;
