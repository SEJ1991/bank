import { Outlet } from 'react-router-dom';

import Anchor from '../elements/Anchor';

export default function Layout() {
  return (
    <div className='w-full max-w-[600px] h-full bg-slate-800 mx-auto my-0'>
      <Outlet />
      <nav className='flex gap-2'>
        <Anchor to='/'>홈</Anchor>
      </nav>
    </div>
  );
}
