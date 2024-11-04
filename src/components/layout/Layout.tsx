import { Outlet } from 'react-router-dom';
import { GoHomeFill } from 'react-icons/go';
import { AiFillSetting } from 'react-icons/ai';
import { FaMoneyCheckDollar } from 'react-icons/fa6';
import { FaListAlt } from 'react-icons/fa';

import Navigator from '../Navigator';

export default function Layout() {
  const widthClass = 'w-full max-w-[430px]';
  const cols = NAV_ITEMS.length;

  return (
    <div className={`${widthClass} h-full bg-primary-500 mx-auto my-0`}>
      <Outlet />
      <Navigator className={`grid-cols-${cols} ${widthClass}`} items={NAV_ITEMS} />
    </div>
  );
}

const NAV_ITEMS: NavItem[] = [
  { to: '/', name: '홈', icon: GoHomeFill, exact: true },
  { to: '/account', name: '통장', icon: FaMoneyCheckDollar },
  { to: '/trade', name: '이체', icon: FaListAlt },
  { to: '/setting', name: '설정', icon: AiFillSetting },
];
