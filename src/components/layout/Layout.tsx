import { Outlet } from 'react-router-dom';

import Anchor from '../elements/Anchor';

export default function Layout() {
  return (
    <div className='w-full max-w-[430px] h-full bg-primary-500 mx-auto my-0'>
      <Outlet />
      <nav className='flex gap-2'>
        <Anchor to='/'>홈</Anchor>
      </nav>
    </div>
  );
}
