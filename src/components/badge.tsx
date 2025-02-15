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
      className={`gap-2 rounded-md bg-primary/90 px-3 py-1 sm:text-base text-sm text-white font-semibold tracking-normal	 ${className}`}
    >
      {Icon && <Icon className={`h-5 w-5 ${iconClassName}`} />}
      <span>{text}</span>
    </div>
  );
};

export default Badge;
