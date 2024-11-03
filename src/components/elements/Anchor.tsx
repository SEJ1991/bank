import { Link, LinkProps } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

interface Props extends LinkProps {
  className?: string;
}
export default function Anchor({ className, children, ...props }: Props) {
  return (
    <Link
      className={twMerge(
        'font-medium hover:text-white/80 transition-colors duration-200',
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
