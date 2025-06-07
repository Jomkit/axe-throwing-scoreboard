import { createBrowserRouter } from 'react-router';
import Homepage from './pages/home/Homepage';
import Board from './pages/scoreboard/Board';
import BaseLayout from './layouts/BaseLayout';

export const router = createBrowserRouter([
    {
        Component: BaseLayout,
        children: [
            {
                path: "/",
                Component: Homepage
            },
            {
                path: "/scoreboard",
                Component: Board
            }
        ]
    }
])