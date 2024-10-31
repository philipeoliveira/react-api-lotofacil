import { Outlet, Link } from 'react-router-dom';

export default function App() {
   return (
      <div className='flex flex-col max-w-6xl mx-auto h-screen py-3'>
         <div className='mb-5'>
            <header className='py-5'>
               <h1 className='text-emerald-300 text-3xl'>Estatísticas da Lotofácil</h1>
            </header>
            <nav className='py-3'>
               <ul className='flex gap-2 bg-zinc-800 rounded-md px-3 btn-menu'>
                  <li>
                     <Link to={'/'}>Página inicial</Link>
                  </li>
                  <li>
                     <Link to={'/last-draw'}>Último sorteio</Link>
                  </li>
               </ul>
            </nav>
         </div>
         <main className='flex-1'>
            <Outlet />
         </main>
         <footer className='text-center border-t-2 border-zinc-800 p-3'>
            <p>
               Desenvolvido por{' '}
               <a
                  href='https://github.com/philipeoliveira'
                  title='Abrir em nova aba o GitHub do autor Philipe Oliveira'
                  target='_blank'
               >
                  Philipe Oliveira
               </a>
            </p>
         </footer>
      </div>
   );
}
