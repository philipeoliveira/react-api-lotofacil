import { Outlet } from 'react-router-dom';

import Menu from './components/Menu';
import Footer from './components/Footer';

export default function App() {
   return (
      <div className='flex flex-col max-w-6xl mx-auto h-screen py-3'>
         <div className='mb-5'>
            <header className='py-5'>
               <h1 className='text-emerald-300 text-3xl'>Estatísticas da Lotofácil</h1>
            </header>
            <Menu />
         </div>
         <main className='flex-1'>
            <Outlet />
         </main>
         <Footer />
      </div>
   );
}
