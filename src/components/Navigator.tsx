import { twMerge } from 'tailwind-merge';

import Anchor from './elements/Anchor';

interface Props {
  className?: string;
  items: NavItem[];
}
export default function Navigator({ className, items }: Props) {
  return (
    <nav
      className={twMerge(
        'grid grid-cols-5 fixed bottom-0 h-12 bg-primary-300 rounded-tl-2xl rounded-tr-2xl',
        className
      )}
    >
      {items.map(({ to, children }) => (
        <Anchor
          key={to}
          className='flex justify-center items-center h-full text-white text-sm border-primary-500 border-r last:border-none'
          to={to}
        >
          {children}
        </Anchor>
      ))}
    </nav>
  );
}
