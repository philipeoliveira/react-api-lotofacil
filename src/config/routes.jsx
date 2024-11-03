import App from '../App.jsx';
import Home from '../routes/Home.jsx';
import DrawResults from '../routes/DrawResults.jsx';

import { createBrowserRouter } from 'react-router-dom';
export const router = createBrowserRouter([
   {
      path: '/',
      element: <App />,
      children: [
         {
            path: '/',
            element: <Home />,
         },
         {
            path: 'draw-results',
            element: <DrawResults />,
         },
      ],
   },
]);
