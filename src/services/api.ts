import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Restaurante } from '../pages/Restaurantes';
import { Cardapio } from '../pages/Cardapios';

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getRestaurantes: builder.query<Restaurante[], void>({
      query: () => 'restaurantes'
    }),
    getCardapio: builder.query<Cardapio[], string>({
      query: (id) => `cardapios/${id}`
    }),
  })
});

export const { useGetRestaurantesQuery, useGetCardapioQuery } = api;

export default api;



