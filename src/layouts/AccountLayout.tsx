import { Outlet } from 'react-router-dom';

export default function AccountLayout() {
  return (
    <div className='global-gradient flex min-h-screen w-full items-center justify-center p-4'>
      <p>Account Layout</p>
      <Outlet />
    </div>
  );
}
