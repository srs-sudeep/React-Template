// store.js

import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query/react'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Create an API client using RTK Query
export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BACKEND_URL }),
  endpoints: (builder) => ({
    // Define your API endpoints here
    getUserInfo: builder.query({
      query: () => 'users/profile',
    }),
    getMedicines: builder.query({
      query: () => 'medicines',
    }),
    getOrders: builder.query({
      query: () => 'orders',
    }),
    // ... other endpoints
  }),
})

// Create a Redux store
export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
})

// Set up listeners for automatic query refetching
setupListeners(store.dispatch)

// Export the API hooks for easy usage in components
export const { useGetUserInfoQuery, useGetMedicinesQuery, useGetOrdersQuery } =
  api
