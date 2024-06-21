import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Restaurante } from '../pages/Restaurantes';
import { Cardapio } from '../pages/Cardapios';

type Product = {
  id: number
  price: number
}

type PurchasePayload = {
  products: Product []

  delivery: {
    receiver: string
    address: string
    city: string
    cep: number
    number: number
    complement?: string
  }

  payment: {
    card: {
    name: string
    number: string
    expires: {
      month: number
      year: number
    }
    code: number
    }
    }
  }


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
    purchase: builder.mutation<any, PurchasePayload>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body
      })
    })
  })
})

export const { useGetRestaurantesQuery, useGetCardapioQuery, usePurchaseMutation } = api;

export default api;



