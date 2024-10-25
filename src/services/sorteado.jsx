import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
   const [allLotteryData, setAllLotteryData] = useState([]);
   const bet = [
      '02',
      '03',
      '05',
      '06',
      '09',
      '10',
      '11',
      '13',
      '14',
      '16',
      '18',
      '20',
      '23',
      '24',
      '25',
   ];

   useEffect(() => {
      async function getAllData() {
         const allData = [];
         for (let i = 1; i <= 10; i++) {
            try {
               const response = await axios.get(
                  `https://servicebus2.caixa.gov.br/portaldeloterias/api/lotofacil/${i}`
               );

               allData.push(response.data);
            } catch (error) {
               console.error(`Erro ao buscar dados do concurso ${i}`, error);
            }
            setAllLotteryData(allData);
         }
      }
      getAllData();
   }, []);

   return (
      <div>
         <h1>Lotofácil</h1>
         {allLotteryData.map((data) => {
            return (
               <div key={data.numero}>
                  <h2>Concurso número: {data.numero}</h2>
                  <h2>
                     Números sorteados: {data.listaDezenas && data.listaDezenas.join('-')}
                  </h2>
                  {data.listaDezenas.every((num) => bet.includes(num)) && (
                     <p>Você acertou!</p>
                  )}
               </div>
            );
         })}
      </div>
   );
}

export default App;
