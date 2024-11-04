import { useState } from 'react';
import { useDrawData } from '../hooks/useDrawData';

export default function DrawResults() {
   const [drawNumber, setDrawNumber] = useState('');
   const [inputValue, setInputValue] = useState('');
   const { data, isLoading, isError, error } = useDrawData(drawNumber);
   const [ascOrder, setAscOrder] = useState(false);

   function toggleOrder() {
      setAscOrder(!ascOrder);
   }

   function handleDrawNumberChange(event) {
      setInputValue(event.target.value);
   }

   function handleSubmit(event) {
      event.preventDefault();
      if (isNaN(inputValue) || inputValue <= 0) {
         setInputValue(drawNumber);
         return;
      }
      setDrawNumber(inputValue);
   }

   return (
      <section className='flex flex-col gap-3'>
         <form onSubmit={handleSubmit} className='flex flex-col gap-2 mb-4'>
            <label htmlFor='draw'>Buscar resultado do concurso:</label>
            <div className='flex gap-3'>
               <input
                  type='number'
                  placeholder='Digite o número do concurso'
                  id='draw'
                  onChange={handleDrawNumberChange}
                  value={inputValue}
                  className='min-w-64'
               />
               <button type='submit'>Buscar</button>
            </div>
         </form>

         {isLoading ? (
            <p className='my-5'>Carregando...</p>
         ) : isError ? (
            <div className='my-5'>
               <p>
                  {error.code === 'ERR_BAD_RESPONSE'
                     ? `O concurso ${drawNumber} não foi encontrado.`
                     : 'Não foi possível se conectar com a API da Loterias Caixa.'}
               </p>
               {console.log(`Erro: ${error.message}`)}
            </div>
         ) : (
            data && (
               <div key={data.numero} className='flex flex-col gap-4'>
                  <div className='flex flex-col gap-1'>
                     <h2 className='font-semibold'>
                        Concurso:{' '}
                        <span className='text-xl text-emerald-300'>{data.numero}</span>
                     </h2>
                     <p className='text-sm'>Data do sorteio: {data.dataApuracao}</p>
                  </div>

                  <p className='text-[1.35rem] text-emerald-300 font-semibold'>
                     {ascOrder
                        ? data.listaDezenas.join('-')
                        : data.dezenasSorteadasOrdemSorteio.join('-')}
                  </p>

                  <p>
                     <button onClick={toggleOrder}>
                        {ascOrder ? 'Ordem de sorteio' : 'Ordem crescente'}
                     </button>
                  </p>
               </div>
            )
         )}
      </section>
   );
}
