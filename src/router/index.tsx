import BasicLayout from '@/layout/BasicLayout';
import Home from '@/pages/home/index';
import Profile from '@/pages/profile';
import Test from '@/pages/test';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
    {
        path: '/',
        element: <BasicLayout />,
        children: [
            {
                path: '/home',
                element: <Home />,
            },
            {
                path: '/team',
                element: <div>team</div>,
            },
            {
                path: '/explore',
                element: <div>explore</div>,
            },
            {
                path: '/profile',
                element: <Profile />,
            },
        ],
    },
    {
        path: '/test',
        element: <Test />,
    },
]);

export default router;
