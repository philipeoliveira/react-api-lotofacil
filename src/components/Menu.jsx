import { Link } from 'react-router-dom';

export default function Menu() {
   return (
      <nav className='py-3'>
         <ul className='flex gap-2 bg-zinc-800 rounded-md px-3 btn-menu'>
            <li>
               <Link to={'/'}>Página inicial</Link>
            </li>
            <li>
               <Link to={'/draw-results'}>Resultados</Link>
            </li>
         </ul>
      </nav>
   );
}
