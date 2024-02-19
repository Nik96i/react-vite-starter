import AccountLayout from '@/layouts/AccountLayout.tsx';

export default function publicRoutes() {
  return {
    element: <AccountLayout />,
    children: [
      {
        path: '/',
        async lazy() {
          const { Home } = await import('@/pages/home');
          return { Component: Home };
        },
      },
      {
        path: '/about',
        async lazy() {
          const { About } = await import('@/pages/about');
          return { Component: About };
        },
      },
      {
        path: '/',
        async lazy() {
          const { Home } = await import('@/pages/home');
          return { Component: Home };
        },
      },
    ],
  };
}
