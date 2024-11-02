import { Outlet } from 'react-router-dom';
import Anchor from '../elements/Anchor';

export default function Layout() {
  return (
    <div>
      <nav className='flex gap-2'>
        <Anchor to='/' text='HOME' />
      </nav>
      <Outlet />
    </div>
  );
}
