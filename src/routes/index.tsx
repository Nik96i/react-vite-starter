import { createBrowserRouter } from 'react-router-dom';
import publicRoutes from '@/routes/publicRoutes.tsx';
import privateRoutes from '@/routes/privateRoutes.tsx';

const appRoutes = createBrowserRouter([publicRoutes(), privateRoutes()]);

export { appRoutes };
