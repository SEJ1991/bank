import { Link, LinkProps } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

interface Props extends LinkProps {
  className?: string;
  text?: string;
}
export default function Anchor({ className, text, ...props }: Props) {
  return (
    <Link className={twMerge('font-medium text-blue-950 hover:text-red-200', className)} {...props}>
      {text}
    </Link>
  );
}
