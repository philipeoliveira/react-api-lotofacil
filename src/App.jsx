import { useEffect, useState } from 'react';
import axios from 'axios';

export default function App() {
   const [isLoading, setIsLoading] = useState(false);
   const [error, setError] = useState(null);
   const [data, setData] = useState(null);
   const [ascOrder, setAscOrder] = useState(false);

   function toggleOrder() {
      ascOrder ? setAscOrder(false) : setAscOrder(true);
   }

   async function fetchData() {
      setIsLoading(true);

      try {
         const response = await axios.get(
            'https://servicebus2.caixa.gov.br/portaldeloterias/api/lotofacil/'
         );
         setData(response.data);
      } catch (error) {
         console.error('Erro ao buscar os dados na API.', error);
         setError(error);
      } finally {
         setIsLoading(false);
      }
   }

   useEffect(() => {
      fetchData();
   }, []);

   return (
      <main>
         <section>
            <h1>Último sorteio da Lotofácil</h1>

            {isLoading ? (
               <p>Carregando...</p>
            ) : error ? (
               <>
                  <p>{error.message}</p>
                  <p>Não foi possível conectar-se à API da Loterias Caixa.</p>
               </>
            ) : (
               data && (
                  <div key={data.numero}>
                     <p>Concurso: {data.numero}</p>
                     <p>Data do sorteio: {data.dataApuracao}</p>
                     <p>
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
      </main>
   );
}