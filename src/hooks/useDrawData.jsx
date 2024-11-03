import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const API_URL = 'https://servicebus2.caixa.gov.br/portaldeloterias/api/lotofacil';

const fetchData = async (drawNumber) => {
   const response = await axios.get(`${API_URL}/${drawNumber}`);
   return response.data;
};

export function useDrawData(drawNumber) {
   const query = useQuery({
      queryKey: ['lotofacil-draw-results', drawNumber],
      queryFn: () => fetchData(drawNumber),
   });

   return query;
}
