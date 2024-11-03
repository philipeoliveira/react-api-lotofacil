import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import App from './App.jsx';
import DrawResults from './routes/DrawResults.jsx';
import Home from './routes/Home.jsx';

// TanStack Query
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient();

// React Router
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
const router = createBrowserRouter([
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

ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
      <QueryClientProvider client={queryClient}>
         <RouterProvider router={router} />
      </QueryClientProvider>
   </React.StrictMode>
);
