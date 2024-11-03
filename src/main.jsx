import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// TanStack Query
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient();

// React Router
import { RouterProvider } from 'react-router-dom';
import { router } from './config/routes';

ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
      <QueryClientProvider client={queryClient}>
         <RouterProvider router={router} />
      </QueryClientProvider>
   </React.StrictMode>
);
