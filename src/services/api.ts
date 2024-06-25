import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

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

  type PurchaseResponse = {
    orderId: string
  }


const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getRestaurants: builder.query<Restaurant[], void>({
      query: () => 'restaurantes'
    }),
    getMenu: builder.query<Menu[], string>({
      query: (id) => `cardapios/${id}`
    }),
    purchase: builder.mutation<PurchaseResponse, PurchasePayload>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body
      })
    })
  })
})

export const { useGetRestaurantsQuery, useGetMenuQuery, usePurchaseMutation } = api;

export default api;



