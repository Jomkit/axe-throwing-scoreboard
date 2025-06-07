import { createBrowserRouter } from 'react-router';
import Homepage from './pages/home/Homepage';
import Board from './pages/scoreboard/Board';
import BaseLayout from './layouts/BaseLayout';
import InitBoard from './pages/initBoard/InitBoard';

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
                children: [
                    { index: true, Component: Board },
                    { path: "setup", Component: InitBoard }
                ]
            }
        ]
    }
])