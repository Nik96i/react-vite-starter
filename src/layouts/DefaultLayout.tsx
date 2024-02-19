import { Outlet } from 'react-router-dom';

export default function DefaultLayout() {
  return (
    <div className='global-gradient flex min-h-screen w-full items-center justify-center p-4'>
      <p>Default Layout</p>
      <Outlet />
    </div>
  );
}
