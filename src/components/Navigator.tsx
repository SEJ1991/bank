import { useLocation } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

import Anchor from './elements/Anchor';
import Typograph from './elements/Typograph';

interface Props {
  className?: string;
  items: NavItem[];
}
export default function Navigator({ className, items }: Props) {
  return (
    <nav
      className={twMerge(
        'grid grid-cols-4 fixed bottom-0 h-navi bg-primary-300 rounded-tl-2xl rounded-tr-2xl',
        className
      )}
    >
      {items.map(item => (
        <Anchor
          key={item.to}
          className='flex justify-center items-center h-full border-primary-500 border-r last:border-none'
          to={item.to}
        >
          <NavigatorItem item={item} />
        </Anchor>
      ))}
    </nav>
  );
}

interface ItemProps {
  item: NavItem;
}
function NavigatorItem({ item: { to, name, icon: Icon, exact } }: ItemProps) {
  const { pathname } = useLocation();
  const isActive = exact ? pathname === to : pathname.includes(to);

  return (
    <div className={`flex flex-col items-center ${isActive ? 'opacity-100' : 'opacity-40'} `}>
      {Icon && <Icon size={20} />}
      <Typograph className='text-[0.75rem]'>{name}</Typograph>
    </div>
  );
}
