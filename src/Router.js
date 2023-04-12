import { useRoutes } from 'react-router-dom';
import React from 'react';

const FirstFile = React.lazy(() => import("./FirstFile"));
const App = React.lazy(() => import("./App"));

const Routes = () => {
    return useRoutes([
        {
            path: "/",
            element: <App/>
        },
        {
            path: "/practise",
            element: <FirstFile/>
        }
    ])
}

export default Routes;
