import type React from 'react';
import type { ElementType } from 'react';

interface BadgeProps {
  icon?: ElementType;
  text: string;
  className?: string;
  iconClassName?: string;
}

export function Badge({ icon: Icon, text, className, iconClassName }: BadgeProps) {
  return (
    <div
      className={`gap-2 rounded-md bg-primary px-3 py-1 text-sm text-white font-bold ${className}`}
    >
      {Icon && <Icon className={`h-4 w-4 ${iconClassName}`} />}
      <span>{text}</span>
    </div>
  );
};

export default Badge;
