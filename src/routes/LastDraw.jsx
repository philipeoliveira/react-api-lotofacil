import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export default function LastDraw() {
   const [ascOrder, setAscOrder] = useState(false);

   function toggleOrder() {
      ascOrder ? setAscOrder(false) : setAscOrder(true);
   }

   const { data, isLoading, isError, error } = useQuery({
      queryKey: ['last-lotofacil-draw'],
      queryFn: async () => {
         const response = await axios.get(
            'https://servicebus2.caixa.gov.br/portaldeloterias/api/lotofacil/'
         );
         return response.data;
      },
   });

   return (
      <section className='flex flex-col gap-1'>
         <h2>Sorteio mais recente da Lotofácil</h2>
         {isLoading ? (
            <p className='my-5'>Carregando...</p>
         ) : isError ? (
            <div className='my-5'>
               <p>Erro: {error.message}</p>
               <p>Não foi possível conectar-se à API da Loterias Caixa.</p>
            </div>
         ) : (
            data && (
               <div key={data.numero}>
                  <p className='text-sm'>Data do sorteio: {data.dataApuracao}</p>
                  <div className='flex flex-col gap-2 my-3'>
                     <p className='font-semibold'>
                        Concurso:{' '}
                        <span className='text-xl text-emerald-300'>{data.numero}</span>
                     </p>
                     <p className='text-[1.35rem] text-emerald-300 font-semibold'>
                        {ascOrder
                           ? data.listaDezenas.join('-')
                           : data.dezenasSorteadasOrdemSorteio.join('-')}
                     </p>
                     <p className='mt-3'>
                        <button onClick={toggleOrder} className='btn'>
                           {ascOrder ? 'Ordem de sorteio' : 'Ordem crescente'}
                        </button>
                     </p>
                  </div>
               </div>
            )
         )}
      </section>
   );
}
