import { Outlet } from 'react-router-dom';

import Navigator from '../Navigator';

export default function Layout() {
  const widthClass = 'w-full max-w-[430px]';
  return (
    <div className={`${widthClass} h-full bg-primary-500 mx-auto my-0`}>
      <Outlet />
      <Navigator className={widthClass} items={NAV_ITEMS} />
    </div>
  );
}

const NAV_ITEMS: NavItem[] = [
  { to: '/', children: '홈' },
  { to: '/', children: '홈' },
  { to: '/', children: '홈' },
  { to: '/', children: '홈' },
  { to: '/', children: '설정' },
];
